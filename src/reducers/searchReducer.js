import {
  USERS_SEARCH_PENDING, USERS_SEARCH_FULFILLED, USERS_SEARCH_REJECTED
} from '../actions/types'

const initialState = {
  searchString: '',
  fetching: false,
  users: [],
  currPage: 1,
  hasNextPage: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USERS_SEARCH_PENDING:
      return {
        ...state,
        fetching: true
      }

    case USERS_SEARCH_FULFILLED:
      return {
        ...state,
        fetching: false,
        users: action.payload,
        hasNextPage: true
      }

    case USERS_SEARCH_REJECTED:
      return {
        ...state,
        fetching: false,
        hasNextPage: false
      }

    default: 
      return state
  }
}