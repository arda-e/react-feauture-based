import { combineReducers } from 'redux'
import { apiSlice } from '@/api/api'
import { authReducer } from '@/features/auth'
import { errorReducer } from '@/features/error'
import { notificationReducer } from '@/features/notification'

export const rootReducer = combineReducers({
  // ! Don't add new apiSlice here. instead inject it the apiSlice
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  notifications: notificationReducer,
  error: errorReducer,
})
