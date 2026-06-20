# Slim - default 404 page

Slim's built-in 404 - a minimal page reading "404 Not Found" over "The requested resource
could not be found. Please verify the URI and try again.", with a "Go Back" link.
`not-found.html` is the rendered default.

## Provenance

Byte-exact from slimphp/Slim: `HtmlErrorRenderer::renderHtmlBody()` wraps the title and
description for an `HttpNotFoundException` (with `displayErrorDetails` off, the default):
<https://github.com/slimphp/Slim/blob/4.x/Slim/Error/Renderers/HtmlErrorRenderer.php>.

The title ("404 Not Found") and description come from `HttpNotFoundException`. The renderer
concatenates the markup with no newlines, so the page is a single line, exactly as
reproduced here.

## Rights

MIT, (c) Josh Lockhart and the Slim Framework team. See the root `NOTICE.md`.
