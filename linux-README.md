# Web server default pages - nginx, Apache, Caddy

The non-IIS companions to the IIS archive. Same idea: the page you get on a fresh
install before you've configured anything. Big difference from the IIS set - on Linux
the "default page" is **distro packaging**, not the upstream project, so each server
has several. What's here is the canonical/most-seen variant of each.

| Folder | Server | Page says | Ships at | Provenance |
|--------|--------|-----------|----------|------------|
| `nginx/`          | nginx (upstream/Debian) | "Welcome to nginx!" | `/usr/share/nginx/html/index.html` | exact (stable upstream) |
| `apache-itworks/` | Apache HTTP Server (upstream) | "It works!" | `htdocs/index.html` | exact |
| `apache-ubuntu/`  | Apache (Debian/Ubuntu pkg) | "Apache2 Default Page" | `/var/www/html/index.html` | exact (+ `ubuntu-logo.png`) |
| `caddy/`          | Caddy v2 | "Caddy works!" / "Congratulations!" | `/usr/share/caddy/index.html` | exact (logo SVG stubbed) |
| `nginx-rhel/`     | nginx (RHEL/Fedora pkg) | "Welcome to nginx on Red Hat Enterprise Linux!" | `/usr/share/nginx/html/index.html` | exact (+ 2 PNGs) |
| `apache-rocky/`   | Apache (Rocky/EL9 pkg) | "HTTP Server Test Page ... Rocky Linux" | `/usr/share/httpd/noindex/index.html` | exact (+ 2 PNGs) |

Line endings here are **LF** (Unix), unlike the CRLF in the IIS archive. Every page in
this set is byte-exact. The two RHEL-family test pages were pulled straight off live
EL boxes still serving their stock defaults (HTML + images), since their files ship
only inside RPMs, not as git blobs.

---

## nginx - "Welcome to nginx!"

The famous minimalist one: 35em centered column, Tahoma/Verdana, three short
paragraphs pointing at nginx.org / nginx.com. Dead simple and barely changed in 15
years. Two things worth knowing:

- **`html { color-scheme: light dark; }`** was added in **nginx 1.23.2 (Oct 2022)**.
  Before that the `<style>` block was just the `body` rule. If you're recreating a
  pre-2022 box, delete that line.
- Debian/Ubuntu rename it `index.nginx-debian.html` but the contents are identical to
  upstream. **RHEL/Fedora/EPEL are different** - they ship an elaborate "Welcome to
  nginx on Red Hat Enterprise Linux! / This page is used to test the proper
  operation..." page with `[ Powered by nginx ]` / `[ Powered by <distro> ]` footer
  badges. That's the direct parallel to Apache's test page (below), and it's now in
  `nginx-rhel/` - the genuine RHEL variant (red `#900` header, inline CSS) with its
  `nginx-logo.png` + `poweredby.png`. Fedora/EPEL/CentOS variants are identical bar the
  distro name in the title and the `poweredby.png` badge.

## Apache - it's three different pages

1. **Upstream "It works!"** (`apache-itworks/`) - the entire file is literally
   `<html><body><h1>It works!</h1></body></html>`. This is what vanilla httpd from
   apache.org serves. Most people have never seen it because almost nobody runs Apache
   without a distro package.

2. **Debian/Ubuntu "Apache2 Ubuntu Default Page"** (`apache-ubuntu/`) - the styled
   one everyone actually knows: salmon-red "It works!" header, grey config-overview
   boxes, the `/etc/apache2/` tree, document-root and bug-reporting sections. Debian's
   is byte-identical except the title says "Debian" instead of "Ubuntu" (Ubuntu forked
   it in 2014 over a Launchpad-vs-Debian bug-tracker dispute). Now byte-exact (the genuine file
   only ships inside the `.deb`, so it was pulled straight off a 22.04+ box). Note this
   is the **current systemd-era** version (updated 2022-03-22, launchpad bug 1966004):
   the header is the Ubuntu logo + "Apache2 Default Page" with "It works!" in an
   absolutely-positioned **orange (#E9510E) banner**, the font stack leads with
   **Ubuntu**, and the service text uses `systemctl`/`journalctl` rather than the older
   `/etc/init.d/apache2`. Debian's variant differs by title and drops the logo/banner.

3. **RHEL-family test page** (`apache-rocky/`) - now included as the Rocky Linux EL9
   variant: "HTTP Server Test Page powered by: Rocky Linux", a full-bleed gradient page
   with inline CSS, the Rocky badge (`icons/poweredby.png`) and the webserver badge
   (`poweredby.png`). Unlike the others it's served from `/usr/share/httpd/noindex/`
   via `welcome.conf` and **only appears while the docroot is empty** - drop one file in
   `/var/www/html` and it vanishes (it's wired as `ErrorDocument 403`, not a real index).
   The artwork ships in the `*-logos-httpd` package (`rocky-logos-httpd`,
   `centos-logos-httpd`, `redhat-logos-httpd`), which is why the branding swaps per
   distro. EL6/7 had an older flatter "Apache HTTP Server Test Page powered by CentOS"
   with the same plumbing.

## Caddy - "Caddy works!"

Caddy 2's welcome page: a stack of three white "paper" cards, the top one rotated
-4deg (the "slanted page" it apologizes for), the Caddy logo, "Congratulations!" in
nine languages, and dual success/failure runbooks. Self-contained HTML+CSS, served
from `/usr/share/caddy`. Source: `caddyserver/dist` -> `welcome/index.html`.

- The copy here is byte-exact **except** the ~3KB inline logo `<svg>` path data, which
  I stubbed with a pointer comment to keep the file readable. Grab the full SVG from
  the dist repo if you want a pixel-perfect logo.
- This is a **Caddy 2** artifact (April 2020+). Caddy v1 had no welcome page - it
  defaulted to serving the current directory on port **2015**.

---

## Not included (honorable mentions)

- **lighttpd** - "powered by lighttpd" placeholder page.
- **Apache Tomcat** - the Tomcat-branded "It works!" landing page with the cat/feather
  logo at `/` (different lineage from Apache HTTP Server entirely).
- **OpenLiteSpeed / LiteSpeed** - their own welcome/landing page.

Say the word and I'll chase any of these down to byte-exact and fold them in.
