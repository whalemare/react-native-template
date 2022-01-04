import { makeAutoObservable } from 'mobx'

import { LocaleStore } from '../locale/LocaleStore'

export class RootStore {
  get localeStore() {
    return new LocaleStore()
  }

  constructor() {
    makeAutoObservable(this)
  }
}
