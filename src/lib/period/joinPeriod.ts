import { Period } from './Period'
import { mapPeriod } from './mapPeriod'

const defaultStringify = (it: unknown) => {
  if (typeof it === 'string') {
    return it
  }

  return JSON.stringify(it)
}

export function joinPeriod<T>(
  period: Partial<Period<T>>,
  separator: string,
  stringify: (item: T) => string = defaultStringify,
) {
  if (period.start || period.end) {
    const periodStrings = mapPeriod(period, stringify)
    return `${periodStrings.start}${periodStrings.end ? `${separator}${periodStrings.end}` : ''}`
  }

  return undefined
}
