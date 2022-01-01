import { Idable } from './Idable'

export const extractorId = (idable: Idable<string | number>) => {
  return `${idable.id}`
}
