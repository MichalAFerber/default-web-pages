# Sinatra - "doesn't know this ditty" 404

Sinatra's built-in 404 page - the centered grey "Sinatra doesn't know this ditty." screen
with the little 404 image and a "Try this:" snippet suggesting a route to define.

## Provenance

The genuine built-in template from sinatra/sinatra, `lib/sinatra/base.rb` (rendered by
`Sinatra::Base` for a missing route). Captured de-indented exactly as Sinatra emits it - the
heredoc is `.gsub`-stripped of its 10-space lead at render time:
<https://github.com/sinatra/sinatra/blob/main/lib/sinatra/base.rb>.

Two parts are filled per request and are left here as their Ruby interpolations:
`#{request.script_name}` (the mount path, empty by default) in the image URL, and
`#{Rack::Utils.escape_html(code)}` - an HTML-escaped suggested route built from the request
method and path (e.g. `get '/' do ... end`). The apostrophe in the heading is a curly `’`
(U+2019), as in the source.

## Rights

MIT, (c) Blake Mizerany, Konstantin Haase, Zachary Scott, and the Sinatra contributors.
See the root `NOTICE.md`.
