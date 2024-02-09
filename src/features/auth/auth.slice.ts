import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
    setRefreshToken: (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
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

export const { setCredentials, logOut, setPublicKey, setRefreshToken } = authSlice.actions
export default authSlice.reducer
