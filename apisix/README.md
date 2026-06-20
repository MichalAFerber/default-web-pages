# Apache APISIX - "404 Route Not Found"

Apache APISIX's default 404 when no route matches: a JSON body
`{"error_msg":"404 Route Not Found"}`. `404.json` is that body.

## Provenance

The message is byte-exact from apache/apisix, `apisix/init.lua`:
<https://github.com/apache/apisix/blob/master/apisix/init.lua> -

```lua
core.response.exit(404, {error_msg = "404 Route Not Found"})
```

APISIX serializes the table as JSON, giving `{"error_msg":"404 Route Not Found"}`.

## Rights

Apache-2.0, (c) the Apache Software Foundation (Apache APISIX). "Apache APISIX" is an ASF
trademark - see the root `NOTICE.md`.
