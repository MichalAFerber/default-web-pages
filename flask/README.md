# Flask / Werkzeug - 404 Not Found

The plain little "404 Not Found / The requested URL was not found on the server." page a
Flask app returns for an unknown route. Flask delegates error pages to Werkzeug, so this
is Werkzeug's built-in `NotFound` body. `404.html` is that page as served.

## Provenance

Werkzeug ships no static file; the body is built by `HTTPException.get_body` in
`werkzeug/exceptions.py`, with `NotFound.code = 404` and its description string:
<https://github.com/pallets/werkzeug/blob/main/src/werkzeug/exceptions.py>.

The exact generator:

```python
return (
    "<!doctype html>\n"
    "<html lang=en>\n"
    f"<title>{self.code} {escape(self.name)}</title>\n"
    f"<h1>{escape(self.name)}</h1>\n"
    f"{self.get_description(environ)}\n"
)
```

`get_description` wraps the description in `<p>...</p>`, so `404.html` is exactly what
Werkzeug emits for `NotFound`.

## Rights

BSD-3-Clause, (c) the Pallets organization. "Flask" is a trademark of Pallets - see the
root `NOTICE.md`.
