# Vue - "You did it!" welcome page

The welcome page a fresh `npm create vue@latest` project serves - the Vue logo beside the
green "You did it!" headline, above the grid of Documentation / Tooling / Ecosystem /
Community / Support links. Captured as a mirrored `src/` tree.

## Provenance

Byte-exact from vuejs/create-vue, assembled from its `template/` parts - `base/` for the
shell and assets, `code/default/` for the components, `entry/default/` for `main.js`:
<https://github.com/vuejs/create-vue/tree/main/template>.

- `index.html` + `src/main.js` mount `App.vue`, which renders `<HelloWorld msg="You did it!" />`
  and `<TheWelcome />`.
- `TheWelcome.vue` lists the five doc links through `WelcomeItem.vue` and the
  `components/icons/` SVG components; `src/assets/main.css` and `logo.svg` are the base assets.

create-vue stitches these directories together per your prompts; this is the default
JavaScript scaffold. The `msg`, the "You've successfully created a project with Vite + Vue 3"
line, and all link text are literal in the components - no build-time placeholders.

## Rights

MIT, (c) Evan You and the Vue.js contributors. The Vue logo (`logo.svg`) is their mark - see
the root `NOTICE.md`.
