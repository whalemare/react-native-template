/**
 * Check that value is not null and not undefined or throw error with name
 */
export function assert<T>(item: T | null | undefined, name?: string): T {
  if (item !== null && item !== undefined) {
    return item
  }

  throw new Error(`Item ${name} should exists on assert step`)
}
