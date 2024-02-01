/* eslint-disable no-console */
import { ApiError, UiError } from '@/features/error/error.types'
import { ILogger } from './ILogger'

export class DevLogger implements ILogger {
  error(message: string, data?: unknown) {
    console.error('Error:', message, data)
  }
  info(message: string, data?: unknown) {
    console.info('Info:', message, data)
  }
  debug(message: string, data?: unknown) {
    console.debug('Debug:', message, data)
  }
  apiError(error: ApiError) {
    console.error('API Error:', error)
  }
  uiError(error: UiError) {
    console.error('UI Error:', error)
  }
}
