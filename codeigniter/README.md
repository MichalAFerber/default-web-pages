# CodeIgniter - "Welcome to CodeIgniter!" page

The welcome page a fresh CodeIgniter 4 app serves at `/` - the "Welcome to CodeIgniter 4!"
landing page with the framework's branding and quick links, all styles inlined.

## Provenance

Byte-exact from codeigniter4/CodeIgniter4, `app/Views/welcome_message.php`:
<https://github.com/codeigniter4/CodeIgniter4/blob/develop/app/Views/welcome_message.php>.

It is a PHP view, so it carries a `{csp-style-nonce}` placeholder CodeIgniter fills for its
Content-Security-Policy plus a few `<?= ?>` tags for the footer's render-time / memory stats;
the visible page and its CSS are otherwise literal in the file.

## Rights

MIT, (c) the CodeIgniter Foundation. "CodeIgniter" is their mark - see the root `NOTICE.md`.
