# Astro - "Welcome to Astro" starter

The welcome page a fresh Astro "basics" project serves - the dark page with the Astro logo
over a soft gradient and the "To get started..." links. Captured as a mirrored `src/` tree.

## Provenance

Byte-exact from withastro/astro, `examples/basics/src/`:
<https://github.com/withastro/astro/tree/main/examples/basics/src>.

The `src/` layout is preserved so the imports resolve: `pages/index.astro` wraps
`components/Welcome.astro` in `layouts/Layout.astro`, and Welcome pulls in
`assets/astro.svg` and `assets/background.svg`. The visible UI and its inline styles live in
`Welcome.astro`.

## Rights

MIT, (c) the Astro Technology Company and contributors. The Astro logo (`astro.svg`) is their
mark - see the root `NOTICE.md`.
