import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { AuthState } from './auth.types'

// Define the initial state
const initialState: AuthState = {
  user: null,
  token: null,
}

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ accessToken: string }>) => {
      const { accessToken } = action.payload
      // state.user = user;
      state.token = accessToken
    },
    logOut: (state) => {
      // state.user = null;
      state.token = null
    },
  },
})

// Export the actions and reducer
export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer

// Define selectors with Reselect and type information
const selectAuthState = (state: { auth: AuthState }) => state.auth

export const selectCurrentUser = createSelector(selectAuthState, (auth: AuthState) => auth.user)

export const selectCurrentToken = createSelector(selectAuthState, (auth: AuthState) => auth.token)
