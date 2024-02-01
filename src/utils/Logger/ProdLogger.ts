/* eslint-disable no-console */
/*
TODO: Implement a logger that send client-side errors to a backend server.
Consider batching error reports or using a debounce mechanism to limit the rate of requests. 
Prioritize certain types of errors for reporting or only report errors under specific conditions.
*/

import { ApiError, UiError } from '@/features/error/error.types'
import { ILogger } from './ILogger'

export class ProdLogger implements ILogger {
  error(message: string, data?: unknown) {
    // Log errors to an external service or use console
    console.error('Error:', message, data)
  }

  info(message: string, data?: unknown) {
    console.error('Error:', message, data)
  }

  debug(message: string, data?: unknown) {
    console.error('Error:', message, data)
  }

  apiError(error: ApiError) {
    console.error('API Error:', error)
  }

  uiError(error: UiError) {
    // UI errors might be logged differently or not at all in production
    console.error('UI Error:', error)
  }
}
