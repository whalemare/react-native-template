import React from 'react'
import { StyleProp, ViewStyle, View, Text } from 'react-native'

import { getKeys } from '~/lib/typescript/getKeys'

import pkg from '../../../package.json'

interface HelloScreenProps {
  style?: StyleProp<ViewStyle>
}

/**
 * @deprecated remove me
 */
export const HelloScreen: React.FC<HelloScreenProps> = props => {
  const { style } = props

  const deps = getKeys(pkg.dependencies)
    .map(name => {
      const version: string = pkg.dependencies[name]
      return `${name}: ${version}`
    })
    .join('\n')

  return (
    <View style={style}>
      <Text>Hello from React-Native template</Text>
      <Text style={{ textAlign: 'center' }}>{deps}</Text>
    </View>
  )
}
