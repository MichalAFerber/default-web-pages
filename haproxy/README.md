# HAProxy - 503 Service Unavailable

HAProxy's stock "503 Service Unavailable / No server is available to handle this
request." page - shown when no backend server is available.

`503.http` is the genuine default error file: a complete raw HTTP/1.0 response (status
line + headers + HTML body), which is exactly how HAProxy ships and serves it.

## Provenance

Byte-exact from the HAProxy source, `examples/errorfiles/503.http`:
<https://github.com/haproxy/haproxy/blob/master/examples/errorfiles/503.http>.

## Rights

HAProxy is licensed GPL-2.0-or-later, (c) Willy Tarreau and contributors. See the root
`NOTICE.md`.
