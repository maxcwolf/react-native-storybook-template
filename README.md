# :wolf: react-native-storybook-template

> Fully Featured React Native Storybook template for a quick start with loading stories and many quality of life improvements.

## :star: Features

- Usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the React Native Typescript template
- Ability to load new stories via yarn command
- Silences annoying metro bundler warnings
- Adds helpful code snippets for UI Theme switching (`src/index.tsx`) and using symlinked deps (`metro.config.js`)

## :arrow_forward: Usage

> I have only published to github, but the RN-CLI does not allow namespaced packages... I will publish directly to NPM in the future. For now, the command below using the repo URL works fine.

```sh
npx react-native init Storybook --template https://github.com/maxcwolf/react-native-storybook-template
```

### Note on the legacy CLI

There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

Further information can be found here: <https://github.com/react-native-community/cli#about>

## :bookmark: License

This project is [MIT](LICENSE) licensed.
