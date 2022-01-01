import { Logger } from './Logger'

/**
 * Compose loggers into single logger with additional message wrapper
 */
export class WrapMessageLogger implements Logger {
  debug(...args: unknown[]): void {
    this.loggers.forEach(it => it.debug(this.name, args))
  }
  log(...args: unknown[]): void {
    this.loggers.forEach(it => it.log(this.name, args))
  }
  info(...args: unknown[]): void {
    this.loggers.forEach(it => it.info(this.name, args))
  }
  warn(message: string, error?: Error | unknown): void {
    this.loggers.forEach(it => it.warn(`${this.name} ${message}`, error))
  }
  error(message: string, error?: Error | unknown): void {
    this.loggers.forEach(it => it.error(`${this.name} ${message}`, error))
  }

  push(logger: Logger) {
    this.loggers.push(logger)
  }

  constructor(private name: string, private loggers: Logger[] = []) {}
}
