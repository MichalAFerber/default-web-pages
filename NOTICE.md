# NOTICE

`default-web-pages` is an **archival and reference collection** of the pages that web
servers, reverse proxies, and application frameworks display on a fresh install — default
landing pages, test pages, and error pages — plus a few related placeholder and decoy
pages. Many of these only ship inside an OS image, a distro package, or a long-dead
product, so the goal is to gather and identify them in one place.

## What the LICENSE covers (and what it does not)

The accompanying [`LICENSE`](LICENSE) (MIT) applies **only to the original work in this
repository created by the maintainer**:

- the repository structure and organization;
- the `README.md` files, this `NOTICE.md`, `SOURCES.md`, and other documentation;
- any scripts or tooling; and
- the maintainer's own first-party pages (`ari-integration.com/`, `site-maintenance/`).

The MIT license **does not** apply to — and grants no rights in — the **collected
third-party pages, assets, and bundles**. Each remains the property of its respective
owner under that owner's own copyright, license, and/or trademark. They are included here
for archival, educational, and identification purposes. Per-item origins are mapped in
[`SOURCES.md`](SOURCES.md); each folder's README adds detail.

Where a collected item carries its **own** license file, that license governs it. Projects
this archive only **links** to rather than vendoring — see **Related projects** in the
[README](README.md) — remain entirely under their own terms (for example `fake-iis`,
MIT © 2026 Aayush Sinha).

## Trademarks and logos

Open-source **code** is not the same as a free-to-reuse **logo**. Several pages embed
brand marks that remain trademarks of their owners no matter how the surrounding HTML is
licensed:

- **Microsoft Corporation** — the Windows flag, the IIS marks, the Microsoft / Microsoft
  Web wordmarks, and the IIS Help text (`iis-*`, including the IIS Help `COLEGAL.HTM`, and
  `iis-assets/`).
- **Canonical Ltd.** — the Ubuntu logo and name (`apache-ubuntu/`).
- **Rocky Enterprise Software Foundation** — the Rocky Linux marks (`apache-rocky/`).
- **Red Hat, Inc.** — Red Hat Enterprise Linux naming (`nginx-rhel/`).
- **F5, Inc.** — the nginx name and logo (`nginx/`, `nginx-rhel/`).
- **The Apache Software Foundation** — the Apache feather and name, including **Apache
  Tomcat** and **Apache APISIX** (`apache-*`, `tomcat/`, `apisix/`).
- **The Caddy project / Stack Holdings GmbH** — the Caddy name and logo (`caddy/`).
- **Varnish Software AS** — the "Varnish" name (`varnish/`).
- **HAProxy Technologies, LLC** — the "HAProxy" name (`haproxy/`).
- **The Squid Software Foundation** — the "Squid" name (`squid/`).
- **The Linux Foundation** — the "Kubernetes" name (`nginx-ingress/`).
- **The Django Software Foundation** — the "Django" name and logo (`django/`).
- **David Heinemeier Hansson** — "Ruby on Rails" and the Rails logo (`rails/`).
- **The Pallets organization** — the "Flask" name (`flask/`).
- **Broadcom Inc.** — "Spring" and "Spring Boot" (`spring-boot/`).
- **Taylor Otwell** — the "Laravel" name and logo (`laravel/`).
- **Traefik Labs** — the "Traefik" name and logo (`traefik/`).
- **The Cloud Native Computing Foundation** — the "Envoy" name (`envoy/`).
- **Kong Inc.** — the "Kong" name (`kong/`).

These marks appear only as part of faithfully reproducing the original pages. Their
inclusion is **nominative/archival use and does not imply any affiliation with,
sponsorship by, or endorsement from the owners**, and is **not** a grant of any right to
use those marks.

## Government seals, law-enforcement, and decoy pages

This collection includes a **decoy / impersonation** asset of the kind used in honeypot,
sinkhole, and security-research contexts:

- `domain-seized.webp` — a "THIS WEBSITE HAS BEEN SEIZED" banner that reproduces the
  **U.S. Department of Justice** and **Federal Bureau of Investigation** seals and a Dutch
  **FIOD** (Fiscale Inlichtingen- en Opsporingsdienst) logo.

A related external decoy server, [`fake-iis`](https://github.com/aayusharyan/fake-iis), is
**linked** under Related projects in the README rather than vendored here.

Government seals and insignia carry restrictions that are **independent of copyright**. In
the United States, use of the FBI's name, initials, and seal (18 U.S.C. § 709), of official
seals and insignia generally (18 U.S.C. § 701), and impersonation of a federal officer or
agency (18 U.S.C. § 912) are restricted by statute; other jurisdictions have equivalents.
These assets are included **only** for archival, reference, and defensive-research purposes,
to document what such pages look like. **They must not be used to impersonate law
enforcement, to deceive, or in any way that implies official authorization.** Nothing in
this repository is affiliated with, sponsored by, or endorsed by any government agency.

## Reconstructions

A few pages are labeled **reconstructions**, not original bytes — most of the visible text
is genuine, but some surrounding markup was rebuilt because the original was not
recoverable (notably IIS 4.0 and IIS 6.0). These are called out in place; see the IIS
READMEs and `SOURCES.md`.

## Good-faith / takedown

This is a non-commercial, good-faith archival project, and this notice is **not legal
advice** (IANAL). If you are a rights holder — or an agency whose seal appears here — and
would like an item removed or re-attributed, please open an issue and it will be addressed
promptly.
