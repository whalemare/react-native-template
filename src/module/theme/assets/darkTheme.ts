import { lightTheme } from './lightTheme'

// TODO: this should be refactored to darkTheme support
export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: 'black',
  },
}
