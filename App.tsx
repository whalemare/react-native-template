import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { HelloScreen } from './src/module/hello/HelloScreen'

export const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HelloScreen />
    </GestureHandlerRootView>
  )
}
