import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './style1.css'
import './style.css'
import { BrowserRouter as Router } from 'react-router-dom'
// import './responsive.css'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
)
