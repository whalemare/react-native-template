import { observer } from 'mobx-react-lite'
import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'

import { useAppTheme } from '../hook/useAppTheme'

interface ThemedActivityIndicatorProps extends ActivityIndicatorProps {}

export const ThemedActivityIndicator = observer<ThemedActivityIndicatorProps>(({ ...props }) => {
  const theme = useAppTheme()
  return <ActivityIndicator color={theme.colors.primary} {...props} />
})
