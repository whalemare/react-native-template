export interface Disableable<T> {
  item: T
  disabled: boolean
}

export const isDisabled = <T>(item: Disableable<T>) => {
  return item.disabled ? true : false
}

export const isNotDisabled = <T>(item: Disableable<T>) => {
  return !isDisabled(item)
}
