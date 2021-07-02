import { AppRegistry } from 'react-native'
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { loadStories } from './load-stories'
import './rn-addons'

// enables knobs for all stories
addDecorator(withKnobs)

/**
 * @note
 *  To implement theme switching in your application, refactor this example
 *  code to suite your needs and place the `addDecorator` below this comment
 *
 * @example
 * ```ts
 * import { ThemeProvider, themeA, themeB } from '<component-library>'
 *
 * const getThemeFromStringValue = (themeName: string) =>
 *   themeName === 'themeA' ? themeA : themeB
 *
 * addDecorator((storyFn: any) => {
 *   return (
 *     <ThemeProvider
 *       theme={getThemeFromStringValue(select('theme', ['themeA', 'themeB'], 'themeA'))}
 *     >
 *       {storyFn()}
 *     </ThemeProvider>
 *   )
 * })
 * ```
 */

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUi = getStorybookUI({
  asyncStorage: null,
  port: 6006,
})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUi)

export { StorybookUi }
