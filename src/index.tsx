/*
* index.ts 
* Entry point for the application and the root of the React tree.
!TODO:// Add application logic to App.tsx file. This file will be used to render the application.
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/*
! This file is the entry point for the application and the root of the React tree.
! Don't add app logic to this file.
*/

async function enableMocking() {
  if (process.env.NODE_ENV !== 'mock') return

  const { worker } = await import('../mocks/browser')
  return worker.start()
}

const container = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(container)

enableMocking().then(() => root.render(<App />)) // ! Don't add providers here.
