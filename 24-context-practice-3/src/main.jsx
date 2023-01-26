import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserContextProvider } from './userContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
)
