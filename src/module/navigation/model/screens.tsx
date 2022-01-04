import { TempScreen } from '~/module/hello/TempScreen'

import { ScreenName } from './ScreenName'

export const screens = {
  [ScreenName.Temp]: () => TempScreen,
}

type Screens = typeof screens
export type GetScreenParams<K extends ScreenName> = React.ComponentProps<ReturnType<Screens[K]>>['route']['params']
export type ScreenListProps = {
  [key in ScreenName]: GetScreenParams<key>
}
