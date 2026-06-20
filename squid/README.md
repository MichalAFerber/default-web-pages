# Squid - error page (ERR_ACCESS_DENIED)

The familiar Squid proxy error page - "ERROR / The requested URL could not be retrieved"
with the cache-administrator footer. `ERR_ACCESS_DENIED` is the template shown for an
access-denied; every Squid error shares this same HTML skeleton, only the middle message
differs.

## Provenance

Byte-exact from the Squid source, `errors/templates/ERR_ACCESS_DENIED`:
<https://github.com/squid-cache/squid/blob/master/errors/templates/ERR_ACCESS_DENIED>.

This is the genuine **template**: the `%` tokens are filled in by Squid at render time -
`%U` the URL, `%T` the timestamp, `%h`/`%s` the host and Squid version, `%w` the admin
e-mail, and `%l` injects the logo/stylesheet block. Opened as-is, the tokens show
literally.

## Rights

Squid is licensed GPL-2.0-or-later, (c) the Squid Software Foundation and contributors.
See the root `NOTICE.md`.
