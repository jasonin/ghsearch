import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUsers } from '../../actions'
import './SearchResultsContainer.css'

import SearchBarContainer from '../SearchBarContainer/SearchBarContainer'
import UserCard from './UserCard/UserCard'

class SearchResultsContainer extends Component {

  componentWillMount() {
    const { match: { params } } = this.props
    this.props.getUsers(params.query)
  }

  render() {
    const users = this.props.search.users.map ((user) => {
      return (
        <UserCard key={user.login} data={user}/>
      )
    })

    return (
      <div className="SearchResultsContainer"> 
        <SearchBarContainer />
        <div> {users} </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search
})
export default connect(mapStateToProps, { getUsers })(SearchResultsContainer)
