# Django - "The install worked successfully! Congratulations!"

Django's default landing page - the one with the launching rocket, shown when
`DEBUG=True` and no URLs are wired up yet.

`default_urlconf.html` is the genuine template Django renders for it - it carries the
inline rocket SVG/CSS, `{% translate %}` i18n tags, and the running Django version.

## Provenance

Byte-exact from django/django, `django/views/templates/default_urlconf.html`:
<https://github.com/django/django/blob/main/django/views/templates/default_urlconf.html>.

## Rights

BSD-3-Clause, (c) the Django Software Foundation and contributors. The Django name and
logo are trademarks of the DSF - see the root `NOTICE.md`.
