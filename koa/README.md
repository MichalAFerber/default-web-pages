# Koa - default "Not Found"

The plain-text body Koa sends for an unhandled request when no middleware set a response
body: `Not Found` (9 bytes, no trailing newline), as `text/plain`. `not-found.txt` holds it
exactly.

## Provenance

Byte-exact from koajs/koa: when the body is still empty, `respond()` falls back to
`body = ctx.message || String(code)`, and `ctx.message` for a 404 is "Not Found":
<https://github.com/koajs/koa/blob/master/lib/application.js>.

## Rights

MIT, (c) the Koa contributors. See the root `NOTICE.md`.
