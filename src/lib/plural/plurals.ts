import type { Plural } from './Plural'

/**
 * Format number to string
 * const count = 23
 * // 0 -найдено, 1 - найдена, 2 - найдены
 * const word = plurals(count, ['найдено', 'найдена', 'найдены']);
 * assert(word === '23 найдено')
 *
 * @param number - example: 1, 2, 3, ..., 10, .. 234, .. n
 * @param titles - names of number
 */
export function plurals(number: number, titles: Plural) {
  const abs = Math.abs(number)
  const cases = [2, 0, 1, 1, 1, 2]
  const word = titles[abs % 100 > 4 && abs % 100 < 20 ? 2 : cases[abs % 10 < 5 ? abs % 10 : 5]]
  return word
}
