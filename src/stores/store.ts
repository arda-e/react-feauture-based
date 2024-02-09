import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '@/api'
import { rootReducer } from './store.rootReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
