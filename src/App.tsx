/*
! Any provider that is used in the app should be added here. Do not add any other logic here.
! Routes should be added to the AppRoutes component in src/routes/components/AppRoutes.tsx
*/
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores'
import { AppRoutes } from '@/routes'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <AppRoutes />
        </Router>
      </Provider>
    </>
  )
}

export default App
