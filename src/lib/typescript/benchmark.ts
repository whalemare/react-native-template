import { Logger } from '../logger/Logger'

export const benchmark = async (action: () => Promise<unknown>, message: string, logger: Logger) => {
  const start = Date.now()
  let error = undefined
  try {
    await action()
  } catch (e) {
    error = e
  } finally {
    const end = Date.now()
    const messageBenchmark = `${message}: took ${end - start}ms`
    if (error) {
      logger.error(messageBenchmark, error)
    } else {
      logger.log(messageBenchmark)
    }
  }
}
