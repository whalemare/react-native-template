import { Period } from './Period'

export interface Periodable<T = Date> {
  period: Period<T>
}
