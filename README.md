# Sapper boilerplate

The template I use for setting up a [Sapper](https://github.com/sveltejs/sapper) project.

Forked from [sveltejs/sapper-template-rollup](https://github.com/sveltejs/sapper-template-rollup) — changes from upstream are pulled periodically.

The main differences from the official template:

- [Prettier](https://github.com/prettier/prettier) and [ESLint](https://github.com/eslint/eslint) are already set up
- [Svelte Preprocess](https://github.com/sveltejs/svelte-preprocess) is included, with [PostCSS](https://github.com/postcss/postcss) running the [Autoprefixer](https://github.com/postcss/autoprefixer) plugin
- Global CSS is included in [`_layout.svelte`](src/routes/_layout.svelte) rather than being served from the `static` directory
- The template is a clean slate — without the routes given as examples in the official template
- [Service worker](https://github.com/sveltejs/sapper-template/blob/master/src/service-worker.js) is not included by default
- Routes are rendered directly to the `body` element

## Getting started

Download a copy of this repo into the current directory using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit imrich-nagy/sapper-boilerplate
```

Install dependencies and run the project in development mode:

```bash
npm install
npm run dev
```

See [sveltejs/sapper-template](https://github.com/sveltejs/sapper-template) for more info.

## License

[MIT](LICENSE)
