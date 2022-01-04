import type { NativeStackNavigationOptions, NativeStackScreenProps } from '@react-navigation/native-stack'

import type { useAppNavigation } from '../hook/useAppNavigation'

/**
 * Each screen must be typed with this props for getting access to navigation and register it in whole navigation system
 *
 * @example
 *
 * export type AuthScreenProps = undefined
 *
 * export const AuthScreen: Screen<AuthScreenProps> = observer(() => {
 *   return (
 *     <View>
 *       <Text>Auth Screen</Text>
 *     </View>
 *   )
 * })
 */
export type Screen<P = undefined, S = { nomatter: P }> = React.FC<
  Omit<
    NativeStackScreenProps<
      /**
       * This want Record<string, object | undefined>
       * But is always allowed more than that and not allowed any kind of interfaces not extended Records
       * So, we just ignore it
       */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      S,
      keyof S
    >,
    'navigation'
  > & {
    navigation: ReturnType<typeof useAppNavigation>
  }
> & {
  stackOptions?: NativeStackNavigationOptions
}
