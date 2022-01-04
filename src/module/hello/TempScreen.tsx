import React from 'react'
import { Text, View } from 'react-native'

import { Screen } from '../navigation/model/Screen'

export type TempScreenProps = undefined

export const TempScreen: Screen<TempScreenProps> = () => {
  return (
    <View>
      <Text>TempScreen</Text>
    </View>
  )
}
