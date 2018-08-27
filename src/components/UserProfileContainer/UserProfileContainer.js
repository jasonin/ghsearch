import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getUserProfile, getUserFollowers, getUserFollowing, getUserRepos } from '../../actions'
import './UserProfileContainer.css'

import SearchBar from '../SearchBar/SearchBar'

class UserProfileContainer extends Component {

  componentWillMount() {
    const { match: { params } } = this.props
    this.props.getUserProfile(params.login)
    this.props.getUserFollowers(params.login)
    this.props.getUserFollowing(params.login)
    this.props.getUserRepos(params.login)
  }

  render() {
    return (
      <div className="container UserProfileContainer">
        <SearchBar />
        <h1>LOL</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})
export default connect(mapStateToProps, { getUserProfile, getUserFollowers, getUserFollowing, getUserRepos })(UserProfileContainer)
