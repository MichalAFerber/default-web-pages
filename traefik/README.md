# Traefik - "404 page not found"

What Traefik returns for a request that matches no router: a bare `404 page not found`.
It isn't a styled page - Traefik hands unmatched requests to Go's standard library, so
this is `net/http`'s built-in 404 (the same one countless Go services emit).

`404.txt` is the exact response body - `404 page not found` plus the trailing newline,
19 bytes.

## Provenance

Byte-exact from the Go standard library `net/http`:
<https://github.com/golang/go/blob/master/src/net/http/server.go> -

```go
func NotFound(w ResponseWriter, r *Request) { Error(w, "404 page not found", StatusNotFound) }
```

`http.Error` writes the message with a trailing newline (`fmt.Fprintln`), so the body is
`404 page not found\n`.

## Rights

The Go standard library is BSD-3-Clause, (c) The Go Authors. "Traefik" is a trademark of
Traefik Labs - see the root `NOTICE.md`.
