import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

import { OmitFunctions } from '~/lib/typescript/OmitFunctions'
import { useStores } from '~/module/root/hook/useStores'

import { ThemeStore } from './ThemeStore'

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

/**
 * Create `useStyles` hook, that can be used inside component with efficient rerender
 */
export function makeStyles<T extends NamedStyles<T> | NamedStyles<unknown>>(
  createStyle: (store: OmitFunctions<ThemeStore>) => T | NamedStyles<T>,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cache: Record<string, any | undefined> = {}

  const useStyles = (): T => {
    const { themeStore } = useStores()

    // TODO: rewrite to using localStore with auto observable changes
    const key = `${themeStore.isDark}${themeStore.safeArea.bottom}${themeStore.safeArea.top}$${themeStore.safeArea.left}${themeStore.safeArea.right}`
    if (cache[key]) {
      return cache[key]
    }

    const styles = createStyle(themeStore)
    cache[key] = styles
    // Styles is correct here, we need optional creating and real T as result
    // @ts-ignore
    return styles
  }

  return useStyles
}
