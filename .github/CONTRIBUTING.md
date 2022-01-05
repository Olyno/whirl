# Contributing to Whirl 💪

You're considering contributing to Whirl 🎉

## Different types of contribution

### Raising issues 🐛

Before raising a new issue, be sure to check the issue wasn't raised before. If it was and you don't feel it was resolved, open a new issue linking to the old 👍

When raising an issue, follow the issue template the best you can.

### Development setup

The Whirl demo uses `Svelte` via `vite`. Dynamic imports play a huge role in keeping the loading times minimal. Styles are subject to code splitting and are only pulled in when a user selects an animation. All whirls are created using SASS.

To get started, fork the repo and then clone it.

```shell
git clone https://github.com/username/whirl
```

Then install dependencies with `yarn`;

```shell
yarn
```

You're good to go 🙌

```shell
yarn dev
```

Run `yarn run` to see a list of available commands.

### Adding a new loading animation 👟

*This part of the documentation need to be rework due to internal or future changements.*

Open a PR following the PR template. Your commit message needn't be complex;

`feat: add awesome-whirl animation`

