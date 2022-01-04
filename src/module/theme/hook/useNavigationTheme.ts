import { DefaultTheme as NavLightTheme, DarkTheme as NavDarkTheme, Theme } from '@react-navigation/native'

import { useStores } from '~/module/root/hook/useStores'

export function useNavigationTheme(): Theme {
  const { themeStore } = useStores()

  const sourceTheme = themeStore.isDark ? NavDarkTheme : NavLightTheme

  return {
    ...sourceTheme,
    dark: themeStore.isDark,
    colors: {
      ...sourceTheme.colors,
      card: themeStore.theme.colors.backgroundCard,
      border: themeStore.theme.colors.border,
      background: themeStore.theme.colors.background,
      primary: themeStore.theme.colors.primary,
      text: themeStore.theme.colors.textPrimary,
    },
  }
}
