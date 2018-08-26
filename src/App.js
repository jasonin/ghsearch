import React, { Component } from 'react'
import { connect } from 'react-redux'

import { searchUsers, getUserProfile, getUserFollowers, getUserFollowing } from './actions'

import './App.css'


class App extends Component {
  
  componentWillMount() {
    // For debugging
    this.props.searchUsers('feross')
    this.props.getUserProfile('feross')
    this.props.getUserFollowers('feross')
    this.props.getUserFollowing('feross')
  }

  render() {
    return (
      <div className="App">
        Hello World
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search
})
export default connect(mapStateToProps, { searchUsers, getUserProfile, getUserFollowers, getUserFollowing })(App)
