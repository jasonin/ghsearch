import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'

import { getUserProfile, getUserFollowers, getUserFollowing } from '../../actions'

class UserProfileContainer extends Component {

  componentWillMount() {
    const { match: { params } } = this.props
    this.props.getUserProfile(params.login)
    this.props.getUserFollowers(params.login)
    this.props.getUserFollowing(params.login)
  }

  render() {
    return (
      <div className="UserProfileContainer">
        <SearchBar />
        <h1>User Profile</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})
export default connect(mapStateToProps, { getUserProfile, getUserFollowers, getUserFollowing })(UserProfileContainer)
