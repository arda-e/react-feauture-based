import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className="bg-red-600">
      <Outlet />
    </main>
  )
}

export default Layout
