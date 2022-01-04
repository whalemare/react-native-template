import { Period } from './Period'

export function mapPeriod<T, R>(input: Partial<Period<T>>, mapper: (it: T) => R): Partial<Period<R>> {
  return {
    start: input.start ? mapper(input.start) : undefined,
    end: input.end ? mapper(input.end) : undefined,
  }
}
