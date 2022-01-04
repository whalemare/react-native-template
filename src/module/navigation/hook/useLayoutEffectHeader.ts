import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'

import { ScreenName } from '../model/ScreenName'

import { useAppNavigation } from './useAppNavigation'
import { useDefaultHeaderOptions } from './useDefaultHeaderOptions'

export function useLayoutEffectHeader(screenName: ScreenName, options?: NativeStackNavigationOptions) {
  const navigation = useAppNavigation()
  const header = useDefaultHeaderOptions(screenName)

  useLayoutEffect(() => {
    navigation.setOptions({
      ...header,
      ...options,
    })
  }, [header, navigation, options])
}
