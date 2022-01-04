import { Period } from './Period'
import { isNotPartialPeriod } from './isNotPartialPeriod'

export function firstNotPartialPeriod<T>(...periods: Partial<Period<T>>[]): Period<T> | undefined {
  return periods.find(isNotPartialPeriod)
}
