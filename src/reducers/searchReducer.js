import {
  USERS_SEARCH_PENDING, USERS_SEARCH_FULFILLED, USERS_SEARCH_REJECTED,
  SEARCH_QUERY_UPDATE, 
  MORE_USERS_LOAD_FULFILLED, MORE_USERS_LOAD_REJECTED, MORE_USERS_LOAD_PENDING,
  NEXT_PAGE_CHECK
} from '../actions/types'

const initialState = {
  query: '',
  fetching: false,
  users: [],
  currPage: 1,
  hasNextPage: false,
  fetchingNextPage: false
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
        currPage: 1
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
    

    case MORE_USERS_LOAD_PENDING:
      return {
        ...state,
        fetchingNextPage: true
      }

    case MORE_USERS_LOAD_FULFILLED:
      return {
        ...state,
        fetchingNextPage: false,
        currPage: state.currPage + 1,
        users: state.users.concat(action.payload)
      }

    case MORE_USERS_LOAD_REJECTED:
      return {
        ...state,
        fetchingNextPage: false,
        hasNextPage: false
      }
    
    case NEXT_PAGE_CHECK:
      return {
        ...state,
        hasNextPage: action.payload
      }

    default: 
      return state
  }
}