import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './style1.css'
import './style.css'
import { BrowserRouter as Router } from 'react-router-dom'
// import './responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
