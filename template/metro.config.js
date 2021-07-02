/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
}

/**
 * @note
 * If you need to use symlinked packages:
 *  1. `yarn add -D @carimus/metro-symlinked-deps`
 *  2. Uncomment out the following lines and comment out the above code.
 *
 * @see:
 * https://github.com/Carimus/metro-symlinked-deps
 * https://medium.com/@huntie/a-concise-guide-to-configuring-react-native-with-yarn-workspaces-d7efa71b6906
 * https://github.com/facebook/react/issues/13991#issuecomment-830308729
 */
// const { applyConfigForLinkedDependencies } = require('@carimus/metro-symlinked-deps')

// const projectConfig = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// }

// // https://github.com/Carimus/metro-symlinked-deps#option-1-automatic
// const options = {
//   projectRoot: __dirname,
//   blacklistLinkedModules: ['react', 'react-native'],
//   resolveNodeModulesAtRoot: true,
//   debug: true,
// }

// module.exports = applyConfigForLinkedDependencies(projectConfig, options)
