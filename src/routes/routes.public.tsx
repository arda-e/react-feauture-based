import React from 'react'
import { lazyImport } from '@/utils'

const { Login } = lazyImport(() => import('@/features/auth'), 'Login')
const { Unauthorized } = lazyImport(() => import('./components'), 'Unauthorized')

export const publicRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/unauthorized', element: <Unauthorized /> },
]
