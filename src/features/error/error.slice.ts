import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApiError, UiError } from './error.types'
import { logger } from '@/utils/Logger'

interface ErrorState {
  apiError: ApiError | null
  uiError: UiError | null
}

const initialState: ErrorState = {
  apiError: null,
  uiError: null,
}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setApiError: (state, action: PayloadAction<ApiError>) => {
      state.apiError = action.payload
      logger.apiError(action.payload) // Log the error
    },
    setUiError: (state, action: PayloadAction<UiError>) => {
      state.uiError = action.payload
      logger.uiError(action.payload) // Log the error
    },
    clearErrors: (state) => {
      state.apiError = null
      state.uiError = null
    },
  },
})

export const { setApiError, setUiError, clearErrors } = errorSlice.actions
export default errorSlice.reducer
