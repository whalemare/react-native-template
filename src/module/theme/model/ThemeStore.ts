import { makeAutoObservable } from 'mobx'
import { EdgeInsets } from 'react-native-safe-area-context'

import { darkTheme } from '../assets/darkTheme'
import { lightTheme } from '../assets/lightTheme'

export class ThemeStore {
  isDark = false

  safeArea: EdgeInsets = { bottom: 0, left: 0, right: 0, top: 0 }

  get theme() {
    if (this.isDark) {
      return darkTheme
    } else {
      return lightTheme
    }
  }

  setDarkTheme = (isDark: boolean) => {
    this.isDark = isDark
  }

  onSafeAreaChanges = (edges: EdgeInsets) => {
    this.safeArea = edges
  }

  constructor() {
    makeAutoObservable(this)
  }
}
