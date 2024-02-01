import { apiSlice } from '@/stores/api'
import { GetPublicKeyResponse, LoginRequest, LoginResponse, LogoutRequest, LogoutResponse } from './auth.dto'
import { logOut, setCredentials } from './auth.slice'
import { setApiError } from '../error'
import { ApiError } from '../error/error.types'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublicKey: builder.query<GetPublicKeyResponse, void>({
      query: () => `/security/public-key/`,
      extraOptions: {},
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ username, password }) => ({
        url: `/security/login/`,
        method: 'POST',
        body: { username, password },
      }),
      extraOptions: {},
      async onQueryStarted(/*{ username, password } */ _, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setCredentials({ accessToken: data.token }))
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
        } catch (error: unknown) {
          dispatch(setApiError(error as ApiError))
        }
      },
    }),
  }),
})

export const { useGetPublicKeyQuery, useLoginMutation, useLogoutMutation } = authApi
