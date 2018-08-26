import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com/',
})

const fetch = (url, params={}) => {
  return (instance.get( url, { params: params }))
}

export const fetchUserList = (query, page, perPage) => {
  const params = {
    q: query,
    page: page,
    per_page: perPage
  }
  return fetch('/search/users', params)
}

export const fetchUserProfile = (login) => {
  return fetch('/users/' + login)
}

export const fetchUserFollowers = (login) => {
  return fetch('/users/' + login + '/followers')
}

export const fetchUserFollowing = (login) => {
  return fetch('/users/' + login + '/following')
}