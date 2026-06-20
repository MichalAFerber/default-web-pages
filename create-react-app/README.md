# Create React App - default app page

The "Edit src/App.js and save to reload." starter page a fresh `create-react-app` project
serves - the dark screen with the spinning React atom logo and a "Learn React" link.

## Provenance

Byte-exact from facebook/create-react-app, `packages/cra-template/template/`:
<https://github.com/facebook/create-react-app/tree/main/packages/cra-template/template>.

The visible page is React-rendered from `App.js` (the "Edit src/App.js" text and the
"Learn React" link), styled by `App.css` (the `App-logo-spin` animation) around the React
atom `logo.svg`. `index.html` is the `public/` shell - a template whose `%PUBLIC_URL%`
tokens the build step replaces; opened directly it shows an empty page, as its own comment
notes.

## Rights

MIT, (c) Meta Platforms, Inc. (Create React App). The React logo (`logo.svg`) and the React
name are trademarks of Meta - see the root `NOTICE.md`.
