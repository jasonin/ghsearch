import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import AppRoutes from './routes'

import './index.css'

ReactDOM.render(
<Provider store={store}>
  <AppRoutes />
</Provider>, 
document.getElementById('root'))

