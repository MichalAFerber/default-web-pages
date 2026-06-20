# Express - "Cannot GET /" 404

The page Express serves for an unmatched route - a bare HTML document whose body reads
`Cannot GET <path>`. `cannot-get.html` is the exact output for `GET /`: the default 404 a
fresh Express app returns before any routes are defined.

## Provenance

Express hands unhandled requests to **finalhandler**, which builds this page in its
`createHtmlDocument()` function. Reproduced byte-for-byte from that template; the `<pre>`
text is the literal `Cannot GET ` followed by the (HTML-escaped) request path:
<https://github.com/pillarjs/finalhandler/blob/master/index.js>.

## Rights

MIT, (c) Douglas Christopher Wilson and the finalhandler/Express contributors. "Express" is
a project of the OpenJS Foundation. See the root `NOTICE.md`.
