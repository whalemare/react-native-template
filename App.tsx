import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AppThemeProvider } from '~/module/theme/AppThemeProvider'

import { HelloScreen } from './src/module/hello/HelloScreen'

export const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppThemeProvider>
          <HelloScreen />
        </AppThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
