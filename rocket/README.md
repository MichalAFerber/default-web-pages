# Rocket - default 404 page

The HTML error page Rocket serves from its built-in catcher - "404: Not Found" over "The
requested resource could not be found.", with a small "Rocket" footer. `not-found.html` is
the rendered default 404.

## Provenance

Byte-exact from rwf2/Rocket: the `html_error_template!` macro in
`core/lib/src/catcher/catcher.rs`, filled with the 404 row
(`404, "Not Found", "The requested resource could not be found."`):
<https://github.com/rwf2/Rocket/blob/master/core/lib/src/catcher/catcher.rs>.

The macro `concat!`s the code, reason, and description into the markup; the file ends at
`</html>` with no trailing newline, as the template does. (Rocket has a matching
`json_error_template!` for JSON clients.)

## Rights

MIT / Apache-2.0, (c) the Rocket contributors. See the root `NOTICE.md`.
