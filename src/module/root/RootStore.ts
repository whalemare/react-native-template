import { makeAutoObservable } from 'mobx'

import { LocaleStore } from '../locale/LocaleStore'
import { ThemeStore } from '../theme/model/ThemeStore'

export class RootStore {
  get localeStore() {
    return new LocaleStore()
  }

  get themeStore() {
    return new ThemeStore()
  }

  constructor() {
    makeAutoObservable(this)
  }
}
