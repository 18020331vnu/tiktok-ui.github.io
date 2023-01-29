import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import Test from './Test'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <HashRouter>
         <App />
         <Test />
      </HashRouter>
   </React.StrictMode>
)
