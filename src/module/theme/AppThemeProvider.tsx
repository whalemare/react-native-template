import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useStores } from '../root/hook/useStores'

interface AppThemeProviderProps {}

/**
 * Wrapper for libs theme providers that should use our theme
 */
export const AppThemeProvider = observer<AppThemeProviderProps>(({ children }) => {
  const { themeStore } = useStores()
  const safeArea = useSafeAreaInsets()

  useEffect(() => {
    themeStore.onSafeAreaChanges(safeArea)
  }, [safeArea, themeStore])

  return <>{children}</>
})
