//TODO: Move to a common place
import { ApiError, UiError } from '@/features/error/error.types'

export interface ILogger {
  error: (message: string, data?: unknown) => void
  apiError: (error: ApiError) => void
  uiError: (error: UiError) => void
  info: (message: string, data?: unknown) => void
  debug: (message: string, data?: unknown) => void
}
