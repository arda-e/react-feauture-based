import { DevLogger } from './DevLogger'
import { ILogger } from './ILogger'
import { ProdLogger } from './ProdLogger'

class LoggerFactory {
  static createLogger(): ILogger {
    if (process.env.NODE_ENV === 'production') {
      return new ProdLogger()
    } else {
      return new DevLogger()
    }
  }
}

export const logger = LoggerFactory.createLogger()
