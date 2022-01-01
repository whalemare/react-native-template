import { Logger } from './Logger'

/**
 * Compose loggers into single logger
 */
export class ComposeLogger implements Logger {
  debug(...args: unknown[]): void {
    this.loggers.forEach(it => it.debug(args))
  }
  log(...args: unknown[]): void {
    this.loggers.forEach(it => it.log(args))
  }
  info(...args: unknown[]): void {
    this.loggers.forEach(it => it.info(args))
  }
  warn(message: string, error?: Error | unknown): void {
    this.loggers.forEach(it => it.warn(message, error))
  }
  error(message: string, error?: Error | unknown): void {
    this.loggers.forEach(it => it.error(message, error))
  }

  push(logger: Logger) {
    this.loggers.push(logger)
  }

  constructor(private loggers: Logger[] = []) {}
}
