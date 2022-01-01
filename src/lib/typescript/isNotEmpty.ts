type NotEmptyArray<T> = [T, ...T[]]

/**
 * Check that array is not empty and return it non-empty type
 */
export function isNotEmpty<T>(items: T[]): items is NotEmptyArray<T> {
  if (items.length > 0) {
    return true
  }

  return false
}

export function isEmpty<T>(items: T[]): items is [] {
  return !isNotEmpty(items)
}
