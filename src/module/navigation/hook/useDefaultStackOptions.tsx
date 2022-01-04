import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export function useDefaultNavigatorOptions(): NativeStackNavigationOptions {
  return {
    headerTitleAlign: 'center',
  }
}
