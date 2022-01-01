/**
 * Check that value is not null and not undefined
 */
export function isExist<T>(item: T | undefined | null): item is T {
  return item !== null && item !== undefined
}
