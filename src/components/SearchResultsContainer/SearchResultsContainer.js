import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUsers, loadMoreUsers, updateSearchQuery } from '../../actions'
import './SearchResultsContainer.css'

import SearchBar from '../SearchBar/SearchBar'
import UserCard from './UserCard/UserCard'
import LoadMoreButton from './LoadMoreButton/LoadMoreButton'

class SearchResultsContainer extends Component {

  componentWillMount() {
    const { match: { params } } = this.props
    this.props.getUsers(params.query)
    this.props.updateSearchQuery(params.query)
  }

  render() {
    const users = this.props.search.users.map ((user) => {
      return (
        <UserCard key={user.login} data={user}/>
      )
    })

    return (
      <div className="container SearchResultsContainer"> 
        <SearchBar />
        <div> {users} </div>
        <LoadMoreButton search={ this.props.search } onClick={ this.props.loadMoreUsers }/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search
})
export default connect(mapStateToProps, { getUsers, loadMoreUsers, updateSearchQuery })(SearchResultsContainer)
