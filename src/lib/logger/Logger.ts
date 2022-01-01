export interface Logger {
  debug(...args: unknown[]): void
  log(...args: unknown[]): void
  info(...args: unknown[]): void
  warn(message: string, error?: Error | unknown): void
  error(message: string, error?: Error | unknown): void
}
