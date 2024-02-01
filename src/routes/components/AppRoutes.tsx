import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { publicRoutes } from '../routes.public'
//import { privateRoutes } from '../routes.private'

const Spinner = () => {
  return (
    <>
      <div>Spinner</div>
    </>
  )
}

const AppRoutes = () => {
  const routes = [
    ...publicRoutes,
    // ...protectedRoutes,
    // You can add more route configurations here if needed
  ]

  const element = useRoutes(routes)

  return <Suspense fallback={<Spinner />}>{element}</Suspense>
}

export default AppRoutes
