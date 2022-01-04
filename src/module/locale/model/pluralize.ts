import { Plural } from '~/lib/plural/Plural'

/**
 * [1, 2, N | 0]
 */
export const pluralize = <K extends string | number | symbol>(args: { [key in K]: Plural }) => {
  return args
}
