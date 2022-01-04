import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { useMemo } from 'react'

import { useStrings } from '~/module/locale/hook/useStrings'
import { useAppTheme } from '~/module/theme/hook/useAppTheme'

import type { ScreenName } from '../model/ScreenName'

export function useDefaultHeaderOptions(screen: ScreenName): NativeStackNavigationOptions {
  const theme = useAppTheme()
  const strings = useStrings()

  return useMemo(
    () => ({
      title: strings.screens[screen],
      headerBackTitle: '', // by default we hide text on back button
      headerTintColor: theme.colors.primaryInverse,
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
    }),
    [screen, strings.screens, theme.colors.primary, theme.colors.primaryInverse],
  )
}
