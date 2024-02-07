/*
  Authentication state slice and selectors
  TODO: Add user to state and selectors
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { AuthState, User } from './auth.types'

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  publicKey: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ accessToken: string; refreshToken: string; user: User }>) => {
      const { accessToken, user, refreshToken } = action.payload
      state.accessToken = accessToken
      state.refreshToken = refreshToken
      state.user = user
    },
    setPublicKey: (state, action: PayloadAction<{ publicKey: string }>) => {
      const { publicKey } = action.payload
      state.publicKey = publicKey
    },
    refreshToken: (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
      const { accessToken, refreshToken } = action.payload
      state.accessToken = accessToken
      state.refreshToken = refreshToken
    },
    logOut: (state) => {
      state.accessToken = null
      state.refreshToken = null
      state.user = null
      state.publicKey = null
    },
  },
})

const selectAuthState = (state: { auth: AuthState }) => state.auth
export const selectCurrentUser = createSelector(selectAuthState, (auth: AuthState) => auth.user)
export const selectCurrentToken = createSelector(selectAuthState, (auth: AuthState) => auth.accessToken)
export const selectPublicKey = createSelector(selectAuthState, (auth: AuthState) => auth.publicKey)
export const { setCredentials, logOut, setPublicKey, refreshToken } = authSlice.actions
export default authSlice.reducer
