import {
  USERS_SEARCH_PENDING, USERS_SEARCH_FULFILLED, USERS_SEARCH_REJECTED,
  SEARCH_QUERY_UPDATE
} from '../actions/types'

const initialState = {
  query: '',
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

    case SEARCH_QUERY_UPDATE:
      return {
        ...state,
        query: action.payload
      }

    default: 
      return state
  }
}