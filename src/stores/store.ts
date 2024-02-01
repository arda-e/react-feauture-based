import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api'
import { authReducer } from '@/features/auth'
import { notificationReducer } from '@/features/notification'
import { errorReducer } from '@/features/error'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    notifications: notificationReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})
