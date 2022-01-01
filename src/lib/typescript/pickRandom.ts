import { shuffle } from 'lodash/fp'

import { getKeys } from './getKeys'

export function pickRandom<K extends string, V>(object: Record<K, V> | V[]): V {
  if (Array.isArray(object)) {
    return shuffle([...object])[0]
  }
  return shuffle(getKeys(object).map(key => object[key]))[0]
}
