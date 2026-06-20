# Echo - default 404 JSON

The body Echo's default error handler returns for an unmatched route:
`{"message":"Not Found"}`. `not-found.json` holds those bytes plus the trailing newline
Echo's JSON encoder appends (24 bytes total).

## Provenance

Byte-exact from labstack/echo: `DefaultHTTPErrorHandler` wraps the error as
`map[string]any{"message": ...}` (here `http.StatusText(404)` = "Not Found") and sends it
through `c.JSON`:
<https://github.com/labstack/echo/blob/master/echo.go>.

## Rights

MIT, (c) LabStack / Vishal Rana and contributors. See the root `NOTICE.md`.
