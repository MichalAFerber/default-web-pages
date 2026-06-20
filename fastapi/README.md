# FastAPI - default 404 JSON

The body FastAPI returns for a path that matches no route: `{"detail":"Not Found"}` with a
404 status. `not-found.json` holds those exact 22 bytes - no trailing newline, the way
`JSONResponse` serializes them (compact `,`/`:` separators).

## Provenance

Starlette raises `HTTPException(404, "Not Found")` for an unmatched path; FastAPI's
`http_exception_handler` renders it as `JSONResponse({"detail": exc.detail})`:
<https://github.com/fastapi/fastapi/blob/master/fastapi/exception_handlers.py>.

## Rights

MIT, (c) Sebastian Ramirez (tiangolo) and the FastAPI contributors. See the root `NOTICE.md`.
