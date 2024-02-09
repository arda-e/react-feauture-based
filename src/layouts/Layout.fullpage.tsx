import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className="flex grow h-screen justify-center items-center bg-gray-50">
      <Outlet />
    </main>
  )
}

export default Layout
