import { NavigationProp, useNavigation as useUntypedNavigation } from '@react-navigation/native'

import type { ScreenListProps } from '../model/screens'

export function useAppNavigation() {
  return useUntypedNavigation<NavigationProp<ScreenListProps>>()
}
