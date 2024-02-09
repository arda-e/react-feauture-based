import { User } from '@/features/auth/auth.types'
import { createAction } from '@reduxjs/toolkit'

export const setRefreshToken = createAction<{ accessToken: string; refreshToken: string }>('auth/setRefreshToken')
export const logOut = createAction('auth/logout')
export const setAccessToken = createAction<{ accessToken: string }>('auth/setAccessToken')
export const setCredentials = createAction<{ accessToken: string; refreshToken: string; user: User }>(
  'auth/setCredentials'
)
