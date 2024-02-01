/*
  Authentication state slice and selectors
  TODO: Add user to state and selectors
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { AuthState } from './auth.types'

const initialState: AuthState = {
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ accessToken: string }>) => {
      const { accessToken } = action.payload
      state.token = accessToken
    },
    logOut: (state) => {
      state.token = null
    },
  },
})

const selectAuthState = (state: { auth: AuthState }) => state.auth
export const selectCurrentUser = createSelector(selectAuthState, (auth: AuthState) => auth.user)
export const selectCurrentToken = createSelector(selectAuthState, (auth: AuthState) => auth.token)

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
