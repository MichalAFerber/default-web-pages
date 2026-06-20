# Go net/http - "404 page not found"

The plain-text 404 the Go standard library serves for an unmatched route - `404 page not
found` followed by a newline (19 bytes), sent as `text/plain; charset=utf-8`.
`not-found.txt` holds it exactly.

## Provenance

Byte-exact from the Go standard library, `net/http`: `http.NotFound` calls
`http.Error(w, "404 page not found", 404)`, and `Error` writes the message with
`fmt.Fprintln` - hence the trailing newline:
<https://github.com/golang/go/blob/master/src/net/http/server.go>.

(Gin's `gin/not-found.txt` is the same text *without* the trailing newline - Gin uses its
own `default404Body` rather than this function.)

## Rights

BSD-3-Clause, (c) The Go Authors. See the root `NOTICE.md`.
