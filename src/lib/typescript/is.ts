/**
 * Safely typeguard
 *
 * @example
 *
 * const isNumber = is((a) => (typeof a === 'number' ? a : undefined))
 */
export function is<Input, Output extends Input, Args extends unknown[]>(
  f: (value: Input, ...args: Args) => Output | undefined,
) {
  return (value: Input, ...args: Args): value is Output => {
    if (f(value, ...args) !== undefined) {
      return true
    }
    {
      return false
    }
  }
}
