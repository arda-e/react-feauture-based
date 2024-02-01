/*
!TODO:// Any provider that is used in the app should be added here. Do not add any other logic here.
!TODO:// Routes should be added to the AppRoutes component in src/routes/components/AppRoutes.tsx
*/

import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/stores'
import { AppRoutes } from '@/routes'

const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* Add any provider here */}
        <AppRoutes />
      </Provider>
    </>
  )
}

export default App
