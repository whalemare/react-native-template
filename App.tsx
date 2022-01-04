import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { BottomTabsNavigation } from '~/module/tabs/BottomTabsNavigation'

export const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomTabsNavigation />
    </GestureHandlerRootView>
  )
}
