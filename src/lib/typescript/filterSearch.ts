export function filterSearch<T>(search: string, getText: (item: T) => string | undefined) {
  return (item: T) => {
    return getText(item)?.toLocaleLowerCase?.()?.includes?.(search)
  }
}

export function search<T>(items: T[], getText: (item: T) => string | undefined, search: string | undefined): T[] {
  if (items.length === 0) {
    return items
  }

  const normalizedSearch = search?.trim()?.toLocaleLowerCase()
  if (normalizedSearch) {
    return items.filter(filterSearch(normalizedSearch, getText))
  }
  return items
}
