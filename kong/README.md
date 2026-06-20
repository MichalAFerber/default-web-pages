# Kong - "no Route matched with those values"

Kong Gateway's default 404 when a request matches no configured Route: a JSON body
`{"message":"no Route matched with those values"}`. `404.json` is that body.

## Provenance

The message string is byte-exact from Kong/kong, `kong/runloop/handler.lua`:
<https://github.com/Kong/kong/blob/master/kong/runloop/handler.lua> -

```lua
return kong.response.error(404, "no Route matched with those values")
```

Kong serializes the error as JSON (`{"message": ...}`); `404.json` is that response body.
Recent Kong (3.x) also appends a `request_id` field to error responses.

## Rights

Apache-2.0, (c) Kong Inc. "Kong" is a trademark of Kong Inc. - see the root `NOTICE.md`.
