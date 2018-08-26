import {
  PROFILE_FETCH_PENDING, PROFILE_FETCH_FULFILLED, PROFILE_FETCH_REJECTED,
  USER_FOLLOWERS_FETCH, USER_FOLLOWING_FETCH
} from '../actions/types'

const initialState = {
  profile: {},
  followers: [],
  following: [],
  fetching: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PROFILE_FETCH_PENDING:
      return {
        ...state,
        fetching: true
      }

    case PROFILE_FETCH_FULFILLED:
      return {
        ...state,
        fetching: false,
        profile: action.payload
      }

    case PROFILE_FETCH_REJECTED:
      return {
        ...state,
        fetching: false
      }

    case USER_FOLLOWERS_FETCH:
      return {
        ...state,
        fetching: false,
        followers: action.payload
      }    

    case USER_FOLLOWING_FETCH:
      return {
        ...state,
        fetching: false,
        following: action.payload
      }

    default: 
      return state
  }
}