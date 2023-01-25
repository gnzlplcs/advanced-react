import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeContextProvider} from "./themeContext"

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
)
