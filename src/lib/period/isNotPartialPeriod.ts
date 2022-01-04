import { Period } from './Period'

export function isNotPartialPeriod<T>(partial: Partial<Period<T>> | undefined): partial is Period<T> {
  return !!partial?.start && !!partial?.end
}
