/**
 * Use extra symbol for handle infinity numbers
 */
export function infinityFallback(value: number, fallback = '∞') {
  return Number.isFinite(value) ? value : fallback
}
