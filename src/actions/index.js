import {
  USERS_SEARCH_PENDING, USERS_SEARCH_FULFILLED, USERS_SEARCH_REJECTED,
  PROFILE_FETCH_PENDING, PROFILE_FETCH_FULFILLED, PROFILE_FETCH_REJECTED,
  USER_FOLLOWERS_FETCH, USER_FOLLOWING_FETCH
} from '../actions/types'

import { fetchUserList, fetchUserProfile, fetchUserFollowers, fetchUserFollowing } from '../services/fetch'


export const searchUsers = (query, page=1, perPage=10) => (dispatch) => {
  dispatch({
    type: USERS_SEARCH_PENDING
  })

  fetchUserList(query, page, perPage)
    .then((response => {
      dispatch({
        type: USERS_SEARCH_FULFILLED,
        payload: response.data.items
      })    
    }))
    .catch((err) => {
      dispatch({
        type: USERS_SEARCH_REJECTED
      })
    })
}

export const getUserProfile = (login) => (dispatch) => {
  dispatch({
    type: PROFILE_FETCH_PENDING
  })

  fetchUserProfile(login) 
    .then((response => {
      dispatch({
        type: PROFILE_FETCH_FULFILLED,
        payload: response.data
      })
    }))
    .catch((err) => {
      dispatch({
        type: PROFILE_FETCH_REJECTED
      })
    })
}

export const getUserFollowers = (login) => (dispatch) => {
  fetchUserFollowers(login) 
    .then((response => {
      dispatch({
        type: USER_FOLLOWERS_FETCH,
        payload: response.data
      })
    }))
    .catch((err) => {
      dispatch({
        type: USER_FOLLOWERS_FETCH,
        payload: []
      })
    })
}

export const getUserFollowing = (login) => (dispatch) => {
  fetchUserFollowing(login) 
    .then((response => {
      dispatch({
        type: USER_FOLLOWING_FETCH,
        payload: response.data
      })
    }))
    .catch((err) => {
      console.log(err)
      dispatch({
        type: USER_FOLLOWING_FETCH,
        payload: []
      })
    })
}


