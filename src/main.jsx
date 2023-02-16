import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './redux/store'
import Test from './Test'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <HashRouter>
      {/* <BrowserRouter> */}
      <Provider store={store}>
         <App />
      </Provider>
      {/* </BrowserRouter> */}
   </HashRouter>
)
