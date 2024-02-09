/*
! Any provider that is used in the app should be added here. Do not add any other logic here.
! Routes should be added to the AppRoutes component in src/routes/components/AppRoutes.tsx
*/
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/stores'
import { AppRoutes } from '@/routes'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <AppRoutes />
          </Router>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
