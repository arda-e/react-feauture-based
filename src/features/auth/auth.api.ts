import { apiSlice } from '../../stores/api'
import { GetPublicKeyResponse, LoginRequest, LoginResponse, LogoutRequest, LogoutResponse } from './auth.dto'
import { logOut, setCredentials, setPublicKey } from './auth.slice'
import { setApiError } from '../error'
import { ApiError } from '../error/error.types'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublicKey: builder.query<GetPublicKeyResponse, void>({
      query: () => `/v1/security/public-key`,
      extraOptions: {},
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setPublicKey({ publicKey: data.value }))
        } catch (error: unknown) {
          // TODO: check error
          // dispatch(setApiError(error as ApiError))
        }
      },
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ username, password }) => ({
        url: `/login`,
        method: 'POST',
        body: { username, password },
      }),
      extraOptions: {},
      async onQueryStarted(/*{ username, password }*/ _, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setCredentials({ accessToken: data.accessToken, user: data.user }))
        } catch (error: unknown) {
          dispatch(setApiError(error as ApiError))
        }
      },
    }),
    logout: builder.mutation<LogoutResponse, LogoutRequest>({
      query: () => ({
        url: `/security/logout/`,
        method: 'POST',
      }),
      extraOptions: {},
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(logOut())
          // TODO: Make necessary type conversions and check if this is the correct place to do this.
        } catch (error: unknown) {
          dispatch(setApiError(error as ApiError))
        }
      },
    }),
  }),
})

export const { useGetPublicKeyQuery, useLoginMutation, useLogoutMutation } = authApi
