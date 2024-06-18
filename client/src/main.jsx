import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { HouseContextProvider } from './Contexts/HouseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <HouseContextProvider>
        <App />
      </HouseContextProvider>
      {/*  house provider */}
    </Router>
  </React.StrictMode>,
)
