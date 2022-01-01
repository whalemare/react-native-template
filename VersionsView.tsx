import React from 'react'
import { StyleProp, ViewStyle, View, Text } from 'react-native'

import pkg from './package.json'
import { getKeys } from './src/lib/typescript/getKeys'

interface VersionsViewProps {
  style?: StyleProp<ViewStyle>
}

export const VersionsView: React.FC<VersionsViewProps> = props => {
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
