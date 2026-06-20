# Python http.server - default error page

The error page Python's standard-library `http.server` returns - the "Error response" screen
you get from `python -m http.server` for a missing file. `error.html` is the genuine
`DEFAULT_ERROR_MESSAGE` template.

## Provenance

Byte-exact from CPython, `Lib/http/server.py`
(`BaseHTTPRequestHandler.DEFAULT_ERROR_MESSAGE`), served as `text/html;charset=utf-8`:
<https://github.com/python/cpython/blob/main/Lib/http/server.py>.

The `%(code)d`, `%(message)s`, and `%(explain)s` fields are filled when the response is sent.
A 404 from `python -m http.server` renders as: code `404`, message `File not found`,
explanation `Nothing matches the given URI`.

## Rights

PSF License, (c) the Python Software Foundation. See the root `NOTICE.md`.
