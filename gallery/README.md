# Gallery

A browsable gallery of this archive, deployed to GitHub Pages:
[**michalaferber.github.io/default-web-pages**](https://michalaferber.github.io/default-web-pages/).

Every top-level entry folder becomes a card. The build picks a preview per entry and
classifies it:

| Type | Preview | Examples |
|------|---------|----------|
| **Rendered page** | the real HTML in an `<iframe>` (root-absolute `src`/`href` rewritten so assets resolve) | nginx, Apache, IIS, Rocket, CodeIgniter |
| **Response body** | the text/JSON body in a styled "response" card | Gin, Echo, Hono, Koa, HAProxy, Squid |
| **Source / template** | the source in a code card (the page is React/Vue/Astro/Razor/etc. and only renders after a build) | Next.js, Vue, Astro, ASP.NET Core, Laravel |

Metadata (title, blurb, license, upstream link) is read from each folder's `README.md` and
the `SOURCES.md` table, so the gallery stays in sync with the archive.

## How it builds

1. `node gallery/build.mjs` — generates the static site into `dist/` (index, per-entry detail
   pages, and a self-contained preview per entry). No dependencies.
2. `cd gallery && npm install && npx playwright install --with-deps chromium && node shoot.mjs`
   — screenshots each preview into `dist/shots/`. Requests are restricted to local files, so
   thumbnails are hermetic (no live CDN/analytics calls).

`dist/` and `node_modules/` are git-ignored; the site is built fresh in CI on every push to
`main` by [`.github/workflows/pages.yml`](../.github/workflows/pages.yml) and deployed with
`actions/deploy-pages`.

## One-time setup

In the repo settings, set **Settings → Pages → Build and deployment → Source = GitHub
Actions**. The workflow handles the rest.
