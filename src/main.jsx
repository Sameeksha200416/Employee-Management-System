import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'


// localStorage.clear()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <App />
    </AuthProvider>
  </React.StrictMode>,
)
