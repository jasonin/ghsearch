import {
  USERS_SEARCH_PENDING, USERS_SEARCH_FULFILLED, USERS_SEARCH_REJECTED,
  PROFILE_FETCH_PENDING, PROFILE_FETCH_FULFILLED, PROFILE_FETCH_REJECTED,
  USER_FOLLOWERS_FETCH, USER_FOLLOWING_FETCH, USER_REPOS_FETCH,
  SEARCH_QUERY_UPDATE, 
  MORE_USERS_LOAD_FULFILLED, MORE_USERS_LOAD_REJECTED, MORE_USERS_LOAD_PENDING,
  NEXT_PAGE_CHECK
} from '../actions/types'

import { fetchUsers, fetchUserProfile, fetchUserFollowers, fetchUserFollowing, fetchUserRepos } from '../services/fetch'


export const getUsers = (query, page=1, perPage=10) => (dispatch) => {
  dispatch({
    type: USERS_SEARCH_PENDING
  })

  fetchUsers(query, page, perPage)
    .then((response => {
      hasNextPageCheck(response.data.items.length, perPage)(dispatch)
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
      dispatch({
        type: USER_FOLLOWING_FETCH,
        payload: []
      })
    })
}

export const getUserRepos = (login) => (dispatch) => {
  fetchUserRepos(login) 
    .then((response => {
      dispatch({
        type: USER_REPOS_FETCH,
        payload: response.data
      })
    }))
    .catch((err) => {
      dispatch({
        type: USER_REPOS_FETCH,
        payload: []
      })
    })
}

export const updateSearchQuery = (query) => (dispatch) => {
  dispatch({
    type: SEARCH_QUERY_UPDATE,
    payload: query
  })
}

export const loadMoreUsers = (query, page=1, perPage=10) => (dispatch) => {
  dispatch({
    type: MORE_USERS_LOAD_PENDING
  })

  fetchUsers(query, page, perPage)
    .then((response => {

      hasNextPageCheck(response.data.items.length, perPage)(dispatch)
      dispatch({
        type: MORE_USERS_LOAD_FULFILLED,
        payload: response.data.items
      })    
    }))
    .catch((err) => {
      dispatch({
        type: MORE_USERS_LOAD_REJECTED
      })
    })
}

const hasNextPageCheck = (received, expected) => (dispatch) => {  
  if (received < expected) {
    dispatch({
      type: NEXT_PAGE_CHECK,
      payload: false
    }) 
  } else {
    dispatch({
      type: NEXT_PAGE_CHECK,
      payload: true
    }) 
  }  
}


