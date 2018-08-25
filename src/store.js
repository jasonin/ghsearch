import { applyMiddleware, createStore, compose } from 'redux'

import thunk from 'redux-thunk'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = composeEnhancers(applyMiddleware(thunk))

export default createStore(reducers, middleware)