# Apache Tomcat - default ROOT page

The welcome page Tomcat serves from `webapps/ROOT/` on a fresh install: the
"If you're seeing this, you've successfully installed Tomcat. Congratulations!"
dashboard with the Tomcat logo and links to the docs, examples, and Manager app.

| File | What |
|------|------|
| `index.jsp` | the page itself (genuine server source) |
| `tomcat.css` | stylesheet |
| `tomcat.svg` | the Tomcat logo |
| `favicon.ico` | site icon |
| `asf-logo-wide.svg`, `bg-button.png`, `bg-middle.png`, `bg-nav.png`, `bg-upper.png` | CSS background/logo assets |

## Provenance

Byte-exact from the official Apache Tomcat source tree, `webapps/ROOT/` on the `main`
branch: <https://github.com/apache/tomcat/tree/main/webapps/ROOT>.

`index.jsp` is the genuine **server-side source**, not standalone HTML - it is a JSP. The
title and a few values resolve at runtime (`<%= ...getServerInfo() %>`, `${tomcatUrl}`),
and the build-filter tokens `@VERSION_MAJOR_MINOR@` / `@GIT_BRANCH@` are substituted by
Tomcat's Ant build, so a released copy reads e.g. "Apache Tomcat/11". Everything else is
verbatim.

## Rights

Apache License 2.0, (c) the Apache Software Foundation. "Apache Tomcat", the Tomcat logo
(`tomcat.svg`), and the ASF feather (`asf-logo-wide.svg`) are ASF trademarks - see the
root `NOTICE.md`.
