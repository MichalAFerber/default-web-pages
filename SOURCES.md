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

## First-party pages — © Michal Ferber (covered by this repo's [`LICENSE`](LICENSE))

| Path | What it is | Files | Notes |
|------|------------|-------|-------|
| `ari-integration.com/` | The maintainer's own domain-closure notice ("Ari Integration Has Closed", effective 2025-01-31) | `index.html`, `header.png` | Original work. Loads Bootstrap 5 from the jsDelivr CDN (MIT) — not redistributed here |
| `site-maintenance/` | Generic "down for maintenance" placeholder | `index.html`, `maintenance-msg.jpg` | Author-supplied. If `maintenance-msg.jpg` derives from a third-party template, attribute accordingly |

## Decoy and seizure-notice assets — see the caveat in [`NOTICE.md`](NOTICE.md)

A related external decoy project, [`fake-iis`](https://github.com/aayusharyan/fake-iis), is
linked under **Related projects** in the [README](README.md) rather than vendored here.

| Path | What it is | Origin | License / rights | Fidelity |
|------|------------|--------|------------------|----------|
| `domain-seized.webp` | "THIS WEBSITE HAS BEEN SEIZED" banner (1384×783) citing 18 U.S.C. § 2323 and the U.S. District Court for the N.D. of Georgia; reproduces the **DOJ** seal, the **FBI** seal, and a Dutch **FIOD** logo | **Unknown / unverified** — the maintainer cannot establish its origin | Reproduces U.S. Government seals; use is restricted by statute regardless of copyright (18 U.S.C. §§ 701/709/912 — see `NOTICE.md`). Not affiliated with or endorsed by any agency | As supplied |
