import React from 'react'
import { lazyImport } from '@/utils'

const { FullPageLayout } = lazyImport(() => import('@/layouts'), 'FullPageLayout')
const { Login } = lazyImport(() => import('@/features/auth'), 'Login')
const { Unauthorized } = lazyImport(() => import('./components'), 'Unauthorized')
const { DeviceList } = lazyImport(() => import('@/features/devices/routes/device-list'), 'DeviceList')

export const publicRoutes = [
  {
    path: '/',
    element: <FullPageLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'unauthorized', element: <Unauthorized /> },
      { path: 'device-list', element: <DeviceList /> },
      { path: '*', element: <Login /> },
    ],
  },
]
