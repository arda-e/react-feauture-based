/*
* index.ts 
* Entry point for the application and the root of the React tree.
!TODO:// Add application logic to App.tsx file. This file will be used to render the application.
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(container)

root.render(<App />)
