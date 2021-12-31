import React from 'react'
import { Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello from React-Native template</Text>
    </GestureHandlerRootView>
  )
}
