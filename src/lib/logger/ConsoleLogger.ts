/* eslint-disable no-console */

import { Logger } from './Logger'

export class ConsoleLogger implements Logger {
  debug = (args: unknown[]) => {
    console.debug(...args)
  }
  log = (args: unknown[]) => {
    console.log(...args)
  }
  info = (args: unknown[]) => {
    console.info(...args)
  }
  warn = (message: string, error?: Error) => {
    if (error) {
      console.warn(message, error)
    } else {
      console.warn(message)
    }
  }
  error = (message: string, error: Error) => {
    console.error(message, error)
  }
}
