// Builds the static gallery into ./dist from the repo's entry folders.
// No external deps - run with `node gallery/build.mjs` from the repo root.
// Screenshots are added separately by gallery/shoot.mjs (in CI).

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'dist');
const BASE = 'https://michalaferber.github.io/default-web-pages';
const REPO = 'https://github.com/MichalAFerber/default-web-pages';

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

// GitHub mark, inherits text color.
const OCTICON = '<svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>';

const ogTags = ({ title, desc, url, image }) => [
  '<meta property="og:type" content="website">',
  `<meta property="og:title" content="${esc(title)}">`,
  `<meta property="og:description" content="${esc(desc)}">`,
  `<meta property="og:url" content="${esc(url)}">`,
  `<meta property="og:image" content="${esc(image)}">`,
  '<meta name="twitter:card" content="summary_large_image">',
  `<meta name="twitter:title" content="${esc(title)}">`,
  `<meta name="twitter:description" content="${esc(desc)}">`,
  `<meta name="twitter:image" content="${esc(image)}">`,
].join('');

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
    const repoLink = `<a class="repo" href="${REPO}/tree/main/${encodeURIComponent(e.name)}" target="_blank" rel="noopener">${OCTICON}<span>view in repo</span></a>`;
    const src = e.source
      ? `<a class="src" href="${esc(e.source)}" target="_blank" rel="noopener">upstream source ↗</a>` : '';
    const og = ogTags({
      title: `${e.title} · default-web-pages`,
      desc: e.blurb || `The default page shipped by ${e.title}.`,
      url: `${BASE}/entry/${e.name}.html`,
      image: `${BASE}/shots/${e.name}.png`,
    });
    fs.writeFileSync(path.join(OUT, 'entry', `${e.name}.html`), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(e.title)} · default-web-pages</title>${og}<link rel="stylesheet" href="../styles.css"></head>
<body><header class="top"><a class="home" href="../index.html">← all pages</a></header>
<main class="detail"><div class="meta"><span class="badge ${e.category}">${e.category}</span>
<span class="badge type">${TYPE_LABEL[e.type]}</span>
<h1>${esc(e.title)}</h1><p class="blurb">${esc(e.blurb)}</p>
<p class="folder"><code>${esc(e.name)}/${esc(e.file)}</code></p>
${e.rights ? `<p class="rights">${esc(e.rights)}</p>` : ''}<div class="links">${repoLink}${src}</div></div>
<div class="stage"><iframe src="../preview/${e.name}/index.html" title="${esc(e.title)} preview" loading="lazy"></iframe></div>
</main><footer class="foot">Archival gallery · not affiliated with, sponsored by, or endorsed by any vendor whose page appears here. See <a href="${REPO}/blob/main/NOTICE.md">NOTICE</a>.</footer>
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
    cards += `<section class="group-sec"><h2 class="group">${label} <span class="gc">${list.length}</span></h2><div class="grid">`;
    for (const e of list) {
      const ds = esc(`${e.title} ${e.name} ${TYPE_LABEL[e.type]} ${e.category} ${e.blurb}`.toLowerCase());
      cards += `<a class="card-link" href="entry/${e.name}.html" data-search="${ds}">
<div class="thumb"><img src="shots/${e.name}.png" alt="" loading="lazy"
onerror="this.style.display='none';this.parentNode.classList.add('noshot');this.parentNode.dataset.t='${esc(e.title)}'">
<span class="ph">${esc(e.title)}</span></div>
<div class="cap"><span class="name">${esc(e.title)}</span><span class="tag ${e.type}">${TYPE_LABEL[e.type]}</span></div></a>`;
    }
    cards += '</div></section>';
  }
  const idxOg = ogTags({
    title: 'default-web-pages · gallery',
    desc: 'A browsable gallery of the default pages shipped by web servers, proxies, gateways and frameworks — captured byte-for-byte.',
    url: `${BASE}/`,
    image: `${BASE}/shots/_cover.png`,
  });
  fs.writeFileSync(path.join(OUT, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>default-web-pages · gallery</title><meta name="description" content="A browsable gallery of the default pages shipped by web servers, proxies, gateways and frameworks.">
${idxOg}<link rel="stylesheet" href="styles.css"></head>
<body><header class="hero"><h1>default-web-pages</h1>
<p>The pages you see before you've configured anything — the defaults shipped by web servers, proxies, gateways and frameworks, captured byte-for-byte. ${entries.length} entries.</p>
<p class="links"><a href="${REPO}">repo</a> · <a href="${REPO}/blob/main/SOURCES.md">sources</a> · <a href="${REPO}/blob/main/NOTICE.md">notice</a></p>
<div class="search"><input id="q" type="search" placeholder="Filter ${entries.length} pages — name, type, or category…" autocomplete="off" spellcheck="false"></div></header>
<main>${cards}</main>
<footer class="foot">Archival / educational gallery. Vendor names, logos and pages remain the property of their owners; their inclusion is nominative use and implies no affiliation or endorsement. See <a href="${REPO}/blob/main/NOTICE.md">NOTICE</a>.</footer>
<script>
const q=document.getElementById('q');
const cards=[...document.querySelectorAll('.card-link')];
const secs=[...document.querySelectorAll('.group-sec')];
function flt(){
  const t=q.value.trim().toLowerCase().split(/\\s+/).filter(Boolean);
  for(const c of cards){const s=c.dataset.search||'';c.hidden=!t.every(w=>s.includes(w));}
  for(const sec of secs){
    const vis=[...sec.querySelectorAll('.card-link')].filter(c=>!c.hidden).length;
    sec.hidden=vis===0;
    const gc=sec.querySelector('.gc'); if(gc) gc.textContent=vis;
  }
}
q.addEventListener('input',flt);
</script>
</body></html>`);

  fs.copyFileSync(path.join(ROOT, 'gallery', 'assets', 'styles.css'), path.join(OUT, 'styles.css'));
  fs.copyFileSync(path.join(ROOT, 'gallery', 'assets', 'card.css'), path.join(OUT, 'card.css'));
  fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
  fs.writeFileSync(path.join(OUT, 'shots.json'),
    JSON.stringify(entries.map((e) => e.name), null, 0));
  console.log(`Built ${entries.length} entries -> ${path.relative(ROOT, OUT)}/`);
}

build();
