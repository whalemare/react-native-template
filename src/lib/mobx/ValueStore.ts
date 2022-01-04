import { makeAutoObservable } from 'mobx'

export interface ValueStoreProps<T> {
  name?: string
  validate?: (value?: T) => string | undefined
}

export class ValueStore<T> {
  private readonly initialValue: T

  error?: string = undefined
  value: T

  set = (value: T) => {
    this.value = value
    if (this.props.validate) {
      this.error = this.props.validate(this.value)
    }
  }

  clear = () => {
    this.set(this.initialValue)
  }

  setError = (error: string | undefined) => {
    this.error = error
  }

  /**
   * Just call setter again for invoke invalidation process
   * Usefull, when user not type any character in field
   */
  revalidate = () => {
    this.set(this.value)
  }

  constructor(value: T, private props: ValueStoreProps<T> = {}) {
    this.initialValue = value
    this.value = value
    makeAutoObservable(this)
  }
}
