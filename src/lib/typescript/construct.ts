import { FieldsOnly } from './FieldsOnly'
import { getKeys } from './getKeys'

/**
 * Just proxy all values from **props** to **thiz**
 * @example
 *
 * export class DataClass {
 *   id!: string
 *
 *   name!: string
 *
 *   constructor(props: OmitFunctions<DataClass>) {
 *     construct(this, props)
 *   }
 * }
 */
export function construct<T>(thiz: T, props: FieldsOnly<T>) {
  getKeys(props).forEach(key => {
    thiz[key] = props[key]
  })
}
