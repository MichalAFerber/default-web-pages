# Hono - "404 Not Found"

The plain-text body Hono returns for an unmatched route: `404 Not Found` (13 bytes, no
trailing newline), as `text/plain`. `not-found.txt` holds it exactly.

## Provenance

Byte-exact from honojs/hono: the built-in `notFoundHandler` returns
`c.text('404 Not Found', 404)`:
<https://github.com/honojs/hono/blob/main/src/hono-base.ts>.

## Rights

MIT, (c) Yusuke Wada and the Hono contributors. See the root `NOTICE.md`.
