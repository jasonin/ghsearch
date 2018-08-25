import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import userReducer from './userReducer'

export default combineReducers ({
  search: searchReducer,
  user: userReducer
})