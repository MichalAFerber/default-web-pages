// Builds the static gallery into ./dist from the repo's entry folders.
// No external deps - run with `node gallery/build.mjs` from the repo root.
// Screenshots are added separately by gallery/shoot.mjs (in CI).

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'dist');

const SKIP = new Set(['.git', '.github', 'gallery', 'dist', 'node_modules', 'iis-assets']);
const MISC = new Set(['ari-integration.com', 'site-maintenance']);
const FRAMEWORKS = new Set([
  'django', 'rails', 'flask', 'spring-boot', 'laravel', 'express', 'fastapi', 'nextjs',
  'phoenix', 'gin', 'echo', 'sinatra', 'create-react-app', 'go-nethttp', 'python-http-server',
  'astro', 'aspnet-core', 'vue', 'hono', 'koa', 'rocket', 'codeigniter',
]);
// SPA shells whose index.html is just an empty mount point -> show source instead.
const SCAFFOLD = { vue: 'src/App.vue', 'create-react-app': 'App.js' };

const HTML_EXT = ['.html', '.htm'];
const BODY_EXT = ['.txt', '.json', '.http'];
const SRC_EXT = ['.vue', '.tsx', '.astro', '.cshtml', '.php', '.heex', '.erb', '.jsp', '.asp'];
const BODY_NAMES = new Set(['default', 'connect#failed_connect', 'ERR_ACCESS_DENIED']);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');
const pretty = (n) => n.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  .replace(/\.com$/i, '.com');

function listFiles(dir) {
  const out = [];
  (function rec(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) rec(p); else out.push(path.relative(dir, p));
    }
  })(dir);
  return out;
}

function pickPreview(dir) {
  const files = listFiles(dir).filter((r) => path.basename(r).toLowerCase() !== 'readme.md');
  const low = (r) => r.toLowerCase();
  for (const r of files) if (['index.html', 'index.htm'].includes(path.basename(low(r)))) return [r, 'html'];
  for (const r of files) if (HTML_EXT.some((x) => low(r).endsWith(x))) return [r, 'html'];
  for (const r of files) if (BODY_EXT.some((x) => low(r).endsWith(x))) return [r, 'body'];
  for (const r of files) if (SRC_EXT.some((x) => low(r).endsWith(x))) return [r, 'source'];
  for (const r of files) if (BODY_NAMES.has(path.basename(r))) return [r, 'body'];
  return [files[0] || null, 'other'];
}

// folder -> blurb, from the SOURCES.md table (col 2 is the description in every section).
function parseSources() {
  const map = {};
  const md = fs.readFileSync(path.join(ROOT, 'SOURCES.md'), 'utf8');
  for (const line of md.split('\n')) {
    const m = line.match(/^\|\s*`([^`]+?)`\s*\|\s*(.+?)\s*\|/);
    if (m) map[m[1].replace(/\/$/, '')] = m[2].replace(/\*\*/g, '');
  }
  return map;
}

function readmeMeta(dir) {
  const p = path.join(dir, 'README.md');
  if (!fs.existsSync(p)) return {};
  const md = fs.readFileSync(p, 'utf8');
  const title = (md.match(/^#\s+(.+)$/m) || [])[1];
  const source = (md.match(/<(https?:\/\/[^>]+)>/) || [])[1];
  const rights = (md.match(/##\s*Rights\s*\n+([^\n]+)/) || [])[1];
  return { title, source, rights };
}

// Strip one leading slash from root-absolute refs so assets resolve under the preview dir.
function fixPaths(html) {
  return html
    .replace(/\b(src|href)\s*=\s*"\/(?!\/)/g, '$1="')
    .replace(/\b(src|href)\s*=\s*'\/(?!\/)/g, "$1='")
    .replace(/url\(\s*\/(?!\/)/g, 'url(');
}

function copyTree(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const rel of listFiles(src)) {
    if (path.basename(rel).toLowerCase() === 'readme.md') continue;
    const to = path.join(dst, rel);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(path.join(src, rel), to);
  }
}

const TYPE_LABEL = {
  html: 'Rendered page', body: 'Response body', source: 'Source / template', other: 'File',
};

function bodyCard(name, file, text) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(name)}</title><link rel="stylesheet" href="../../card.css"></head>
<body class="card body"><div class="frame"><div class="bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="fn">${esc(file)}</span></div>
<pre class="resp">${esc(text)}</pre></div></body></html>`;
}

function sourceCard(name, file, text) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(name)}</title><link rel="stylesheet" href="../../card.css"></head>
<body class="card source"><div class="frame"><div class="bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="fn">${esc(file)}</span></div>
<pre class="code">${esc(text)}</pre></div></body></html>`;
}

function build() {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(path.join(OUT, 'entry'), { recursive: true });
  fs.mkdirSync(path.join(OUT, 'shots'), { recursive: true });

  const blurbs = parseSources();
  const dirs = fs.readdirSync(ROOT, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !SKIP.has(e.name) && !e.name.startsWith('.'))
    .map((e) => e.name).sort();

  const entries = [];
  for (const name of dirs) {
    try {
      const dir = path.join(ROOT, name);
      let [file, type] = pickPreview(dir);
      if (SCAFFOLD[name]) { file = SCAFFOLD[name]; type = 'source'; }
      if (!file) continue;
      const meta = readmeMeta(dir);
      const category = FRAMEWORKS.has(name) ? 'framework' : MISC.has(name) ? 'misc' : 'server';
      const e = {
        name, file, type, category,
        title: meta.title || pretty(name),
        blurb: blurbs[name] || '',
        source: meta.source || '',
        rights: meta.rights || '',
      };

      const pdir = path.join(OUT, 'preview', name);
      fs.mkdirSync(pdir, { recursive: true });
      if (type === 'html') {
        copyTree(dir, pdir);
        const html = fixPaths(fs.readFileSync(path.join(dir, file), 'utf8'));
        fs.writeFileSync(path.join(pdir, 'index.html'), html);
      } else {
        const raw = fs.readFileSync(path.join(dir, file), 'utf8');
        fs.copyFileSync(path.join(dir, file), path.join(pdir, path.basename(file)));
        const card = type === 'body' ? bodyCard(name, file, raw) : sourceCard(name, file, raw);
        fs.writeFileSync(path.join(pdir, 'index.html'), card);
      }
      entries.push(e);
    } catch (err) {
      console.error(`! skipped ${name}: ${err.message}`);
    }
  }

  // detail pages
  for (const e of entries) {
    const src = e.source
      ? `<a class="src" href="${esc(e.source)}" target="_blank" rel="noopener">upstream source ↗</a>` : '';
    fs.writeFileSync(path.join(OUT, 'entry', `${e.name}.html`), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(e.title)} · default-web-pages</title><link rel="stylesheet" href="../styles.css"></head>
<body><header class="top"><a class="home" href="../index.html">← all pages</a></header>
<main class="detail"><div class="meta"><span class="badge ${e.category}">${e.category}</span>
<span class="badge type">${TYPE_LABEL[e.type]}</span>
<h1>${esc(e.title)}</h1><p class="blurb">${esc(e.blurb)}</p>
<p class="folder"><code>${esc(e.name)}/${esc(e.file)}</code></p>
${e.rights ? `<p class="rights">${esc(e.rights)}</p>` : ''}${src}</div>
<div class="stage"><iframe src="../preview/${e.name}/index.html" title="${esc(e.title)} preview" loading="lazy"></iframe></div>
</main><footer class="foot">Archival gallery · not affiliated with, sponsored by, or endorsed by any vendor whose page appears here. See <a href="https://github.com/MichalAFerber/default-web-pages/blob/main/NOTICE.md">NOTICE</a>.</footer>
</body></html>`);
  }

  // index
  const groups = [
    ['Web frameworks', 'framework'],
    ['Web servers, proxies & gateways', 'server'],
    ['Other', 'misc'],
  ];
  let cards = '';
  for (const [label, cat] of groups) {
    const list = entries.filter((e) => e.category === cat);
    if (!list.length) continue;
    cards += `<h2 class="group">${label} <span>${list.length}</span></h2><div class="grid">`;
    for (const e of list) {
      cards += `<a class="card-link" href="entry/${e.name}.html">
<div class="thumb"><img src="shots/${e.name}.png" alt="" loading="lazy"
onerror="this.style.display='none';this.parentNode.classList.add('noshot');this.parentNode.dataset.t='${esc(e.title)}'">
<span class="ph">${esc(e.title)}</span></div>
<div class="cap"><span class="name">${esc(e.title)}</span><span class="tag ${e.type}">${TYPE_LABEL[e.type]}</span></div></a>`;
    }
    cards += '</div>';
  }
  fs.writeFileSync(path.join(OUT, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>default-web-pages · gallery</title><meta name="description" content="A browsable gallery of the default pages shipped by web servers, proxies, gateways and frameworks.">
<link rel="stylesheet" href="styles.css"></head>
<body><header class="hero"><h1>default-web-pages</h1>
<p>The pages you see before you've configured anything — the defaults shipped by web servers, proxies, gateways and frameworks, captured byte-for-byte. ${entries.length} entries.</p>
<p class="links"><a href="https://github.com/MichalAFerber/default-web-pages">repo</a> · <a href="https://github.com/MichalAFerber/default-web-pages/blob/main/SOURCES.md">sources</a> · <a href="https://github.com/MichalAFerber/default-web-pages/blob/main/NOTICE.md">notice</a></p></header>
<main>${cards}</main>
<footer class="foot">Archival / educational gallery. Vendor names, logos and pages remain the property of their owners; their inclusion is nominative use and implies no affiliation or endorsement. See <a href="https://github.com/MichalAFerber/default-web-pages/blob/main/NOTICE.md">NOTICE</a>.</footer>
</body></html>`);

  fs.copyFileSync(path.join(ROOT, 'gallery', 'assets', 'styles.css'), path.join(OUT, 'styles.css'));
  fs.copyFileSync(path.join(ROOT, 'gallery', 'assets', 'card.css'), path.join(OUT, 'card.css'));
  fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
  fs.writeFileSync(path.join(OUT, 'shots.json'),
    JSON.stringify(entries.map((e) => e.name), null, 0));
  console.log(`Built ${entries.length} entries -> ${path.relative(ROOT, OUT)}/`);
}

build();
