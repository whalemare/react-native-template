import { includes, some } from 'lodash'

/**
 * Ensure that left side includes at least one item from right side
 */
export function includesOneOf<T>(source: T[], search: T[]) {
  return some(source, it => {
    return includes(search, it)
  })
}
