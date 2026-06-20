# Gin - "404 page not found"

The plain-text body Gin serves for an unmatched route: `404 page not found` (18 bytes, no
trailing newline), sent as `text/plain`. `not-found.txt` holds it exactly.

## Provenance

Byte-exact from gin-gonic/gin: the `default404Body` constant in `gin.go`, written by
`serveError` when no route matches:
<https://github.com/gin-gonic/gin/blob/master/gin.go>.

## Rights

MIT, (c) Gin-Gonic / Manu Martínez-Almeida and contributors. See the root `NOTICE.md`.
