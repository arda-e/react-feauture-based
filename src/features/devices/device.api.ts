import { apiSlice } from '@/api'
import { GetDevicesResponse } from './device.dto'

export const deviceEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDevices: builder.query<GetDevicesResponse, void>({
      query: () => `/v1/devices`,
      extraOptions: {},
    }),
  }),
})

export const { useGetDevicesQuery } = deviceEndpoints
