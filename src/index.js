import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import App from './App'
import storeFactory from './Redux/store'

const reduxStore = storeFactory()

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={reduxStore}>
      <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)