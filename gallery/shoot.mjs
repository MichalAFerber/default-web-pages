// Screenshots every entry's preview page into dist/shots/<name>.png.
// Requires Playwright (see gallery/package.json). Run after build.mjs:
//   cd gallery && npm install && npx playwright install --with-deps chromium && node shoot.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const names = JSON.parse(fs.readFileSync(path.join(DIST, 'shots.json'), 'utf8'));

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
// Keep screenshots hermetic: allow local files only, drop live CDN/analytics requests.
await ctx.route('**/*', (route) => {
  route.request().url().startsWith('file:') ? route.continue() : route.abort();
});

let ok = 0;
for (const name of names) {
  const file = path.join(DIST, 'preview', name, 'index.html');
  const page = await ctx.newPage();
  try {
    await page.goto(pathToFileURL(file).href, { waitUntil: 'load', timeout: 20000 });
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(DIST, 'shots', `${name}.png`) });
    ok++;
  } catch (e) {
    console.error(`shot failed: ${name}: ${e.message}`);
  }
  await page.close();
}
await browser.close();
console.log(`Shot ${ok}/${names.length} entries`);
if (ok === 0) process.exit(1);
