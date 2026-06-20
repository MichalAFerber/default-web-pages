# OpenLiteSpeed - welcome page

The "Congratulations, you have successfully installed OpenLiteSpeed Web Server!" page that
OLS serves from its default Example virtual host. `index.html` is the genuine welcome page.

## Provenance

Byte-exact from litespeedtech/openlitespeed, `dist/Example/html/index.html`:
<https://github.com/litespeedtech/openlitespeed/blob/master/dist/Example/html/index.html>.

The page uses absolute `/css`, `/img`, and `/js` paths from the OLS docroot, so it renders
inside OpenLiteSpeed rather than standalone. Its full asset set (Bootstrap + the OLS icon
images) ships in that same `dist/Example/html/` tree; only the two OLS-branded logos
(`img/olsws_logo.png`, `img/powered_by_ols-new.png`) are vendored here - the third-party
Bootstrap/jQuery and the icon set are left external.

## Rights

GPL-3.0, (c) LiteSpeed Technologies Inc. "OpenLiteSpeed" / "LiteSpeed" and their logos are
trademarks of LiteSpeed Technologies - see the root `NOTICE.md`.
