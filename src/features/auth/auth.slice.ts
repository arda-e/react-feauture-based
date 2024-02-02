/*
  Authentication state slice and selectors
  TODO: Add user to state and selectors
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { AuthState, User } from './auth.types'

const initialState: AuthState = {
  user: null,
  token: null,
  publicKey: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ accessToken: string; user: User }>) => {
      const { accessToken, user } = action.payload
      state.token = accessToken
      state.user = user
    },
    setPublicKey: (state, action: PayloadAction<{ publicKey: string }>) => {
      const { publicKey } = action.payload
      state.publicKey = publicKey
    },
    logOut: (state) => {
      state.token = null
      state.user = null
      state.publicKey = null
    },
  },
})

const selectAuthState = (state: { auth: AuthState }) => state.auth
export const selectCurrentUser = createSelector(selectAuthState, (auth: AuthState) => auth.user)
export const selectCurrentToken = createSelector(selectAuthState, (auth: AuthState) => auth.token)
export const selectPublicKey = createSelector(selectAuthState, (auth: AuthState) => auth.publicKey)
export const { setCredentials, logOut, setPublicKey } = authSlice.actions
export default authSlice.reducer
