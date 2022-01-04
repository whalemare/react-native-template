import { Period } from './Period'

type Predicate<T> = (left: T, right: T) => boolean

export function isPeriodEquals<T>(
  left: Partial<Period<T>>,
  right: Partial<Period<T>>,
  isEquals: Predicate<T | undefined> = (left, right) => left === right,
) {
  return isEquals(left.start, right.start) && isEquals(left.end, right.end)
}
