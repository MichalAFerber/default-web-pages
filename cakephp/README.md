# CakePHP - "Welcome to CakePHP" default home page

The default home page a fresh CakePHP app serves - the green "CakePHP ... Welcome" page with
the environment checklist (PHP version, `tmp`/`logs` writable, database connection, caching).
`home.php` is the genuine template.

## Provenance

Byte-exact from cakephp/app (5.x skeleton), `templates/Pages/home.php`:
<https://github.com/cakephp/app/blob/5.x/templates/Pages/home.php>.

It's a PHP view that runs live environment checks (DB connection, writable dirs,
PHP/extension versions) through the closures at the top, so it's captured as source rather
than a static render. The "Welcome to CakePHP" heading and the check labels are literal in
the file.

## Rights

MIT, (c) the Cake Software Foundation. "CakePHP" is their mark - see the root `NOTICE.md`.
