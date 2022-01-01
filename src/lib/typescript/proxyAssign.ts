/* eslint-disable @typescript-eslint/no-explicit-any */
import { OmitFunctions } from './OmitFunctions'
import { getKeys } from './getKeys'

/**
 * Write all keys from partial to item
 */
export function proxyAssign<T extends Record<string, any>>(item: T, partial: OmitFunctions<T>) {
  getKeys(partial).forEach(key => {
    item[key] = partial[key]
  })
  return item
}
