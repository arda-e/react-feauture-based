import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api'
// REDUCER IMPORTS
import { authReducer } from '@/features/auth'
import { notificationReducer } from '@/features/notification'
import { errorReducer } from '@/features/error'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // ! Don't add new apiSlice here. instead inject it the apiSlice
    auth: authReducer,
    notifications: notificationReducer,
    error: errorReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
