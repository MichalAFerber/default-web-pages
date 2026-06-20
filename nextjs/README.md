# Next.js - default error / 404 page

The "404 | This page could not be found" screen (and its 400 / 405 / 500 siblings) that
Next.js renders for errors - a centered status code beside its message, with a
light/dark-mode stylesheet. `_error.tsx` is the genuine component that produces it.

## Provenance

Byte-exact from vercel/next.js, `packages/next/src/pages/_error.tsx`:
<https://github.com/vercel/next.js/blob/canary/packages/next/src/pages/_error.tsx>.

The page is React-rendered - the status-code-to-message map, the inline styles, and the
minified `.next-error-h1` dark-mode CSS all live in this component - so the component source
is the faithful archival artifact rather than a snapshot of server-rendered HTML. For a 404
it sets `<title>404: This page could not be found</title>`.

## Rights

MIT, (c) Vercel, Inc. "Next.js" is a trademark of Vercel - see the root `NOTICE.md`.
