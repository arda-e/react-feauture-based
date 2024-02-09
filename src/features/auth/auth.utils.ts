import { createSelector } from 'reselect'
import { AuthState } from './auth.types'

export const selectAuthState = (state: { auth: AuthState }) => state.auth
export const selectCurrentUser = createSelector(selectAuthState, (auth: AuthState) => auth.user)
export const selectAccessToken = createSelector(selectAuthState, (auth: AuthState) => auth.accessToken)
export const selectRefreshToken = createSelector(selectAuthState, (auth: AuthState) => auth.refreshToken)
export const selectPublicKey = createSelector(selectAuthState, (auth: AuthState) => auth.publicKey)
