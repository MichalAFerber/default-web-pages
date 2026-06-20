# Phoenix - default home page

The welcome page a freshly generated Phoenix app serves at `/` - the "Peace of mind from
prototype to production" landing page with the coral Phoenix splash artwork.
`home.html.heex` is the genuine template `mix phx.new` writes into a new project.

## Provenance

Byte-exact from phoenixframework/phoenix (v1.7.14),
`installer/templates/phx_web/controllers/page_html/home.html.heex`:
<https://github.com/phoenixframework/phoenix/blob/v1.7.14/installer/templates/phx_web/controllers/page_html/home.html.heex>.

It is a HEEx template, so it renders inside the app's root/app layouts and uses assigns
(`@flash`, `@css`), verified-route (`~p"..."`), and function-component (`<.flash_group>`)
syntax - included exactly as Phoenix ships it.

## Rights

MIT, (c) Chris McCord and the Phoenix Framework contributors. See the root `NOTICE.md`.
