interface ApiErrorDetails {
  [key: string]: string
}

export interface ApiError {
  errorCode: string
  errorMessage: string
  errors: ApiErrorDetails
  errorTimestamp: string
}

export interface UiError {
  message: string
}
