import React from 'react'
import { lazyImport } from '@/utils'

const { FullPageLayout } = lazyImport(() => import('@/layouts'), 'FullPageLayout')
const { Login } = lazyImport(() => import('@/features/auth'), 'Login')
const { Unauthorized } = lazyImport(() => import('./components'), 'Unauthorized')

export const publicRoutes = [
  {
    path: '/',
    element: <FullPageLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'unauthorized', element: <Unauthorized /> },
      { path: '*', element: <Login /> },
    ],
  },
]
