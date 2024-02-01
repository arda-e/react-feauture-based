import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '@/features/auth'
// import { setApiError } from '@/features/error/'
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'

interface AuthState {
  token: string
  // user: any // Define this according to your user structure
}

interface RootState {
  auth: AuthState
}

interface RefreshResponse {
  accessToken: string
  // include other properties returned by your /refresh endpoint
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3500',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState
    const token = state.auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  Record<string, never>,
  never
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error) {
    // Dispatch centralized error action
    // TODO: Fix
    // api.dispatch(setApiError(`API Error: ${result.error.status} - ${result.error.data}`));

    if (result.error.status === 403) {
      // TODO: LOGGER
      //console.log('sending refresh token');
      const refreshResult = (await baseQuery('/refresh', api, extraOptions)) as { data: RefreshResponse }
      // console.log(refreshResult);

      if (refreshResult?.data) {
        // const user = (api.getState() as RootState).auth.user;
        api.dispatch(setCredentials({ /* user, */ accessToken: refreshResult.data.accessToken }))
        result = await baseQuery(args, api, extraOptions) // retry original query
      } else {
        api.dispatch(logOut())
      }
    }
  }

  return result as QueryReturnValue<unknown, FetchBaseQueryError, never>
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
