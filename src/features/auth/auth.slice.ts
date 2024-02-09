import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, User } from './auth.types'
import { setRefreshToken, setAccessToken, logOut, setCredentials } from '@/stores/store.sharedActions'

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
    setPublicKey: (state, action: PayloadAction<{ publicKey: string }>) => {
      const { publicKey } = action.payload
      state.publicKey = publicKey
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setRefreshToken, (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
        state.accessToken = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
      })
      .addCase(setAccessToken, (state, action: PayloadAction<{ accessToken: string }>) => {
        state.accessToken = action.payload.accessToken
      })
      .addCase(logOut, (state) => {
        state.accessToken = null
        state.refreshToken = null
        state.user = null
      })
      .addCase(
        setCredentials,
        (state, action: PayloadAction<{ accessToken: string; refreshToken: string; user: User }>) => {
          const { accessToken, user, refreshToken } = action.payload
          state.accessToken = accessToken
          state.refreshToken = refreshToken
          state.user = user
        }
      )
  },
})

export const { setPublicKey } = authSlice.actions
export default authSlice.reducer
