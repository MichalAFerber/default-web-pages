# Envoy - "no healthy upstream"

The plain-text `no healthy upstream` body Envoy returns (HTTP 503, response flag `UH`)
when a route's cluster has no healthy hosts. `no-healthy-upstream.txt` is that exact body
- 19 bytes, no trailing newline.

## Provenance

Byte-exact from envoyproxy/envoy, `source/common/router/router.cc`:
<https://github.com/envoyproxy/envoy/blob/main/source/common/router/router.cc> -

```cpp
callbacks_->sendLocalReply(status_code, "no healthy upstream", ...);
```

Envoy's other ubiquitous body - `upstream connect error or disconnect/reset before
headers. reset reason: ...` - comes from the same local-reply path.

## Rights

Apache-2.0, (c) the Envoy Project Authors. "Envoy" is a trademark of the Cloud Native
Computing Foundation - see the root `NOTICE.md`.
