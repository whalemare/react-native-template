export interface Initable<R = Promise<void>> {
  /**
   * Should be called as fastest as can, directly after constuctor
   */
  init(): R
}

export function isInitable(value: unknown): value is Initable {
  if (value) {
    const initable = value as Initable
    return initable?.init !== undefined && typeof initable.init === 'function'
  }

  return false
}
