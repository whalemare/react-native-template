import { makeAutoObservable } from 'mobx'

export class SingleSelectionStore<T = string> {
  selected: T

  setSelected = (item: T) => {
    this.selected = this.overrideSelection?.(this.selected, item) ?? item
  }

  clear = () => {
    this.selected = this.initial
  }

  constructor(private initial: T, private overrideSelection?: (original: T, newItem: T) => T) {
    this.selected = initial
    makeAutoObservable(this)
  }
}
