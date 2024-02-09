import { RootState } from '@/stores'
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResfreshResponse } from './api.types'
import { logOut, setRefreshToken } from '@/stores/store.sharedActions'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState
    const token = state.auth.accessToken
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauthentication: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  Record<string, never>,
  never
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (api.endpoint !== 'login' && result.error?.status === 401) {
    const state = api.getState() as RootState
    const refreshtoken = state.auth.refreshToken

    if (refreshtoken) {
      const refreshResult = (await baseQuery(
        {
          url: 'v1/token/refresh',
          method: 'POST',
          body: { refreshtoken },
        },
        api,
        extraOptions
      )) as ResfreshResponse

      if (refreshResult.data) {
        api.dispatch(
          setRefreshToken({
            accessToken: refreshResult.data.accessToken,
            refreshToken: refreshResult.data.refreshToken,
          })
        )
      }
      // Retry the initial request with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }

  return result as QueryReturnValue<unknown, FetchBaseQueryError, never>
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauthentication,
  endpoints: () => ({}),
})
