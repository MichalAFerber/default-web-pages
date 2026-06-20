# SOURCES

Provenance for every item in this archive: what it is, where the bytes came from, and how
faithful the copy is.

- **Byte-exact** — pulled unmodified from a genuine source: a live server still serving its
  stock default, an official repo/dist blob, or a real distro package.
- **Reconstructed** — the visible content is genuine, but some surrounding markup was
  rebuilt because the original bytes were not recoverable. Always noted.

Rights stay with each owner; see [`NOTICE.md`](NOTICE.md) for the licensing, trademark, and
government-seal caveats. **Line endings:** IIS pages are **CRLF** (Windows originals); all
other pages are **LF**.

## Microsoft IIS — © Microsoft Corporation

| Path | Version / OS | Files | Origin | Fidelity |
|------|--------------|-------|--------|----------|
| `iis-4.0_nt4-optionpack/` | IIS 4.0 / NT 4.0 Option Pack | `default.asp` | Prose, asset names, and link targets transcribed verbatim from live NT4 hosts still serving it (e.g. ridethesteamtrain.com, support.daggersec.com) | Reconstructed — text genuine, table/CSS skeleton approximate |
| `iis-5.x_win2000-xp/` | IIS 5.0/5.1 / Win 2000, XP | `iisstart.asp`, `localstart.asp`, `LOCALSTART.HTM`, `WINXP/WARNING/WEB/MMC/HELP/PRINT.GIF` | ASP header from an IIS box leaking its `.asp` source; body/CSS/JS + GIFs from an HTTrack mirror of a live IIS 5.1 box (`lexi.re/LOCALSTART.HTM`, signed 2024-06-22), resolved template expressions re-inserted | Genuine, assembled from two captures |
| `iis-6.0_server2003/` | IIS 6.0 / Server 2003 | `iisstart.htm`, `pagerror.gif` | "Under Construction" text verified against period captures | Reconstructed — text genuine, markup period-accurate rebuild |
| `iis-7.0_vista-server2008/` | IIS 7.0 / Vista, Server 2008 | `iisstart.htm` (689 B), `welcome.png` | Live server response + committed copy | Byte-exact |
| `iis-7.5_win7-server2008r2/` | IIS 7.5 / Win 7, Server 2008 R2 | `iisstart.htm`, `welcome.png` | Same page as 7.0 | Byte-exact |
| `iis-8.0_win8-server2012/` | IIS 8.0 / Win 8, Server 2012 | `iisstart.htm`, `bkg-blu.jpg`, `iis-8.png`, `msweb-brand.png`, `w-brand.png` | Genuine install / live response | Byte-exact |
| `iis-8.5_win81-server2012r2/` | IIS 8.5 / Win 8.1, Server 2012 R2 | `iisstart.htm`, `iis-85.png` | Genuine install / live response | Byte-exact |
| `iis-10_win10-client/` | IIS 10 / Windows 10 | `iisstart.htm`, `iis.png` | Genuine install / live response | Byte-exact |
| `iis-10_server2016plus/` | IIS 10 / Server 2016, 2019, 2022 | `iisstart.htm` (703 B), `iisstart.png` | Genuine install / live response | Byte-exact |
| `iis-assets/` | shared IIS image assets | `bkg-blu.jpg`, `iis-8.png`, `iis-85.png`, `iis.png`, `iisstart.png`, `msweb-brand.png`, `w-brand.png`, `welcome.png`, `ws8-brand.png` | Collected from genuine installs / live responses | Byte-exact (binaries) |
| `iis-5.x_win2000-xp/IISHELP/COMMON/` | IIS Help "Legal Information" page (5.x era) | `COLEGAL.HTM`, `COUA.CSS` | HTTrack mirror of a live IIS box's `/iishelp/common/colegal.htm` (`lexi.re`, 2024-06-22), same capture as the `iis-5.x` pages; linked from `localstart` via `IISHELP/COMMON/COLEGAL.HTM`. Carries Microsoft's own "© 1997–2001 Microsoft Corporation" legal/trademark text | Genuine capture, **cleaned**: HTTrack mirror comments and an injected `protonpass-root` browser-extension artifact removed, stylesheet link repointed to the sibling `COUA.CSS`. The non-IE4 sheet `COCSS.CSS` its script also references was not recovered |

IIS 1.0–3.0 default pages are **not recoverable** and are documented, not shipped — see
`IIS-4.0-and-earlier-FINDINGS.md`. There is no IIS 9 (Microsoft jumped 8.5 → 10).

## Linux / Unix servers — code permissive, branding trademarked

| Path | Server / variant | Files | Ships at | Origin | Fidelity | Rights |
|------|------------------|-------|----------|--------|----------|--------|
| `nginx/` | nginx (upstream / Debian) | `index.html` | `/usr/share/nginx/html/` | Stable upstream nginx default | Byte-exact | Code BSD-2-Clause (nginx authors / F5) |
| `nginx-rhel/` | nginx (RHEL / Fedora pkg) | `index.html`, `nginx-logo.png`, `poweredby.png` | `/usr/share/nginx/html/` | Pulled off a live EL box still serving its stock default (file ships only inside the RPM) | Byte-exact | Code BSD (nginx); Red Hat + nginx marks trademarked |
| `apache-itworks/` | Apache httpd (upstream) | `index.html` (45 B) | `htdocs/` | Vanilla httpd from apache.org | Byte-exact | Apache-2.0 (ASF) |
| `apache-ubuntu/` | Apache (Debian / Ubuntu pkg) | `index.html`, `ubuntu-logo.png` | `/var/www/html/` | Pulled off a live Ubuntu 22.04+ box (ships in the `.deb`); current systemd-era page (updated 2022-03-22, LP#1966004) | Byte-exact | Code Apache-2.0; Ubuntu logo © Canonical |
| `apache-rocky/` | Apache (Rocky / EL9 pkg) | `index.html`, `poweredby.png` | `/usr/share/httpd/noindex/` (via `welcome.conf`) | Pulled off a live Rocky EL9 box; artwork from the `rocky-logos-httpd` package | Byte-exact | Code Apache-2.0; Rocky marks © RESF |
| `caddy/` | Caddy v2 | `index.html`, `50x.html` | `/usr/share/caddy/` | `caddyserver/dist` → `welcome/index.html` plus the default `50x` error page | Byte-exact except the inline logo `<svg>` path data, which is stubbed | Apache-2.0; "Caddy" name/logo trademarked |

## Reverse proxies, caches & app servers

| Path | What it is | Origin | License / rights | Fidelity |
|------|------------|--------|------------------|----------|
| `tomcat/` | Apache Tomcat default ROOT welcome page ("…successfully installed Tomcat. Congratulations!") + CSS, logo, favicon, backgrounds | `apache/tomcat` `webapps/ROOT/` (`main`) | Apache-2.0 (ASF); "Tomcat" / feather marks trademarked | Byte-exact; `index.jsp` is genuine JSP source (title resolves at runtime, `@…@` tokens filled by the build) |
| `varnish/` | Varnish "Guru Meditation" 503 error page | `varnishcache/varnish-cache` `bin/varnishd/builtin.vcl` (`vcl_builtin_backend_error`) | BSD-2-Clause (Verdens Gang AS / Varnish Software AS); "Varnish" trademarked | `index.html` rendered from the official VCL template — only status/reason/XID vary |
| `haproxy/` | HAProxy "503 Service Unavailable / No server is available…" page | `haproxy/haproxy` `examples/errorfiles/503.http` | GPL-2.0-or-later (Willy Tarreau & contributors) | Byte-exact raw HTTP response, **CRLF preserved** (see `.gitattributes`) |
| `squid/` | Squid proxy error page ("ERROR: The requested URL could not be retrieved"), the `ERR_ACCESS_DENIED` template | `squid-cache/squid` `errors/templates/ERR_ACCESS_DENIED` | GPL-2.0-or-later (Squid Software Foundation & contributors) | Byte-exact template; `%` tokens are server-filled |
| `nginx-ingress/` | Kubernetes ingress-nginx "default backend - 404" (plain-text 404 body) + its Go source | `kubernetes/ingress-gce` `cmd/404-server/server.go` | Apache-2.0 (The Kubernetes Authors) | Byte-exact 21-byte body + genuine `server.go` |
| `tinyproxy/` | Tinyproxy default error page (ends "Generated by tinyproxy.") | `tinyproxy/tinyproxy` `data/templates/default.html` | GPL-2.0-or-later (Tinyproxy authors) | Byte-exact template (`{errno}`/`{cause}`/`{detail}` server-filled) |
| `trafficserver/` | Apache Traffic Server "body factory" error pages ("Error", "Could Not Connect") | `apache/trafficserver` `configs/body_factory/default/` | Apache-2.0 (ASF) | Byte-exact (`default` + `connect#failed_connect`) |
| `openlitespeed/` | OpenLiteSpeed "Congratulations…installed OpenLiteSpeed" welcome page | `litespeedtech/openlitespeed` `dist/Example/html/index.html` | GPL-3.0 (LiteSpeed Technologies); "OpenLiteSpeed"/"LiteSpeed" marks trademarked | Byte-exact page + 2 OLS logos; Bootstrap/icon assets left external |

## API gateways & edge proxies

| Path | What it is | Origin | License / rights | Fidelity |
|------|------------|--------|------------------|----------|
| `envoy/` | Envoy "no healthy upstream" 503 body (response flag `UH`) | `envoyproxy/envoy` `source/common/router/router.cc` | Apache-2.0 (Envoy Project Authors); "Envoy" a CNCF trademark | Byte-exact body (19 B, no newline) |
| `traefik/` | Traefik "404 page not found" for unmatched routes (Go `net/http` default) | `golang/go` `src/net/http/server.go` (`http.NotFound`) | BSD-3-Clause (The Go Authors); "Traefik" a Traefik Labs trademark | Byte-exact body (`404 page not found\n`) |
| `kong/` | Kong Gateway default 404 "no Route matched with those values" | `Kong/kong` `kong/runloop/handler.lua` | Apache-2.0 (Kong Inc.); "Kong" trademarked | Message byte-exact from source; JSON envelope reconstructed |
| `apisix/` | Apache APISIX default 404 "404 Route Not Found" | `apache/apisix` `apisix/init.lua` | Apache-2.0 (ASF); "Apache APISIX" trademarked | Message byte-exact from source; JSON envelope reconstructed |

## Web frameworks

| Path | What it is | Origin | License / rights | Fidelity |
|------|------------|--------|------------------|----------|
| `django/` | Django "The install worked successfully! Congratulations!" rocket landing page (DEBUG, no URLs) | `django/django` `django/views/templates/default_urlconf.html` | BSD-3-Clause (Django Software Foundation); Django name/logo trademarked | Byte-exact template (inline SVG + `{% translate %}` tags) |
| `rails/` | Rails "Yay! You're on Rails!" welcome page | `rails/rails` `railties/lib/rails/templates/rails/welcome/index.html.erb` | MIT (DHH & Rails contributors); "Ruby on Rails" / logo trademarked | Byte-exact ERB template |
| `flask/` | Flask / Werkzeug "404 Not Found" page | `pallets/werkzeug` `src/werkzeug/exceptions.py` (`HTTPException.get_body` + `NotFound`) | BSD-3-Clause (Pallets); "Flask" trademarked | Rendered from the official generator — byte-for-byte what Werkzeug emits |
| `spring-boot/` | Spring Boot "Whitelabel Error Page" | `spring-projects/spring-boot` `…/error/ErrorMvcAutoConfiguration.java` (v3.5.0) | Apache-2.0 (Broadcom / Spring); "Spring" / "Spring Boot" trademarked | Rendered from the `StaticView` builder (404; example timestamp) |
| `laravel/` | Laravel default welcome page | `laravel/laravel` `resources/views/welcome.blade.php` | MIT (Taylor Otwell & contributors); "Laravel" / logo trademarked | Byte-exact Blade/Tailwind template |
| `express/` | Express "Cannot GET /" unmatched-route 404 | `pillarjs/finalhandler` `index.js` (`createHtmlDocument`) | MIT (D. C. Wilson & contributors; Express is an OpenJS project) | Byte-exact finalhandler output for `GET /` |
| `fastapi/` | FastAPI default 404 body `{"detail":"Not Found"}` | `fastapi/fastapi` `fastapi/exception_handlers.py` (+ Starlette "Not Found") | MIT (Sebastián Ramírez & contributors) | Byte-exact 22-byte JSONResponse body |
| `nextjs/` | Next.js "404 - This page could not be found" error page | `vercel/next.js` `packages/next/src/pages/_error.tsx` | MIT (Vercel); "Next.js" trademarked | Byte-exact component source (page is React-rendered) |
| `phoenix/` | Phoenix "Peace of mind from prototype to production" home page | `phoenixframework/phoenix` (v1.7.14) `installer/templates/phx_web/controllers/page_html/home.html.heex` | MIT (Chris McCord & contributors) | Byte-exact HEEx template |
| `gin/` | Gin "404 page not found" plain-text 404 | `gin-gonic/gin` `gin.go` (`default404Body` / `serveError`) | MIT (Gin-Gonic & contributors) | Byte-exact 18-byte body |
| `echo/` | Echo default 404 JSON `{"message":"Not Found"}` | `labstack/echo` `echo.go` (`DefaultHTTPErrorHandler`) | MIT (LabStack & contributors) | Byte-exact body incl. the encoder's trailing newline |
| `sinatra/` | Sinatra "doesn't know this ditty." built-in 404 page | `sinatra/sinatra` `lib/sinatra/base.rb` | MIT (Sinatra contributors) | Built-in template, de-indented; two `#{…}` interpolations left in |
| `create-react-app/` | Create React App "Edit src/App.js and save to reload." starter | `facebook/create-react-app` `packages/cra-template/template/` | MIT (Meta); React name/logo trademarked | Byte-exact App.js / App.css / logo.svg / index.html |
| `go-nethttp/` | Go `net/http` "404 page not found" stdlib 404 | `golang/go` `src/net/http/server.go` (`NotFound` / `Error`) | BSD-3-Clause (The Go Authors) | Byte-exact 19-byte body (incl. `Fprintln` newline) |
| `python-http-server/` | Python `http.server` "Error response" page | `python/cpython` `Lib/http/server.py` (`DEFAULT_ERROR_MESSAGE`) | PSF License (Python Software Foundation) | Byte-exact template; `%(code)s` fields server-filled |
| `astro/` | Astro "Welcome to Astro" starter (basics) | `withastro/astro` `examples/basics/src/` | MIT (Astro Technology Company); Astro logo trademarked | Byte-exact 5-file `src/` tree |
| `aspnet-core/` | ASP.NET Core "Welcome" Razor Pages home | `dotnet/aspnetcore` `…/RazorPagesWeb-CSharp/Pages/Index.cshtml` | MIT (.NET Foundation); "ASP.NET" / ".NET" trademarked | Byte-exact template (UTF-8 BOM + `dotnet new` `#if` block) |
| `vue/` | Vue "You did it!" welcome (create-vue default) | `vuejs/create-vue` `template/` (`base/` + `code/default/` + `entry/default/`) | MIT (Evan You & contributors); Vue logo trademarked | Byte-exact 13-file `src/` scaffold |

## First-party pages — © Michal Ferber (covered by this repo's [`LICENSE`](LICENSE))

| Path | What it is | Files | Notes |
|------|------------|-------|-------|
| `ari-integration.com/` | The maintainer's own domain-closure notice ("Ari Integration Has Closed", effective 2025-01-31) | `index.html`, `header.png` | Original work. Loads Bootstrap 5 from the jsDelivr CDN (MIT) — not redistributed here |
| `site-maintenance/` | Generic "down for maintenance" placeholder | `index.html`, `maintenance-msg.jpg` | Author-supplied. If `maintenance-msg.jpg` derives from a third-party template, attribute accordingly |

## Decoy and seizure-notice assets

None are vendored here. "This domain has been seized" banners and other law-enforcement
decoys are deliberately excluded (see the caveat in [`NOTICE.md`](NOTICE.md)); a related
external decoy project, [`fake-iis`](https://github.com/aayusharyan/fake-iis), is linked
under **Related projects** in the [README](README.md) rather than included.
