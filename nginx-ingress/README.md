# nginx ingress - "default backend - 404"

The plain-text `default backend - 404` that the Kubernetes ingress-nginx controller
returns when a request matches no Ingress rule. It is not an HTML page - the default
backend answers HTTP 404 with that 21-byte string as `text/plain`.

| File | What |
|------|------|
| `default-backend-404.txt` | the exact response body (21 bytes, no trailing newline) |
| `server.go` | the genuine default-backend source that writes it |

## Provenance

Byte-exact from the official Kubernetes default backend, `cmd/404-server/server.go` in
`kubernetes/ingress-gce`:
<https://github.com/kubernetes/ingress-gce/blob/master/cmd/404-server/server.go>.

The handler is literally:

```go
w.WriteHeader(http.StatusNotFound)
fmt.Fprint(w, "default backend - 404")
```

`fmt.Fprint` adds no newline, so the body is exactly 21 bytes. This is the same
`defaultbackend` image historically wired into ingress-nginx; the original lived in the
now-retired `kubernetes/contrib` `404-server`.

## Rights

Apache License 2.0, (c) The Kubernetes Authors. See the root `NOTICE.md`.
