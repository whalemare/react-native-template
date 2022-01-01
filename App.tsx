import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { VersionsView } from './VersionsView'
export const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <VersionsView />
    </GestureHandlerRootView>
  )
}
