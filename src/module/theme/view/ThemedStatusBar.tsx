import { observer } from 'mobx-react-lite'
import React from 'react'
import { Platform, StatusBar, StatusBarStyle } from 'react-native'

interface ThemedStatusBarProps {
  translucent?: boolean
  inverted?: boolean
}

// This is never changes so we can hardcode color
const statusBarColor = Platform.select({
  ios: 'transparent',
  default: 'rgba(0, 0, 0, 0.15)',
})

export const ThemedStatusBar = observer<ThemedStatusBarProps>(({ translucent, inverted }) => {
  const barStyle: StatusBarStyle = inverted ? 'dark-content' : 'light-content'

  return <StatusBar animated backgroundColor={statusBarColor} barStyle={barStyle} translucent={translucent} />
})
