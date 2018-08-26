import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'

import { getUsers } from '../../actions'

class SearchResultsContainer extends Component {

  componentWillMount() {
    const { match: { params } } = this.props
    this.props.getUsers(params.query)
  }

  render() {
    const users = this.props.search.users.map ( (user) => {
      return (
        <h3 key={user.id}>{ user.login }</h3>
      )
    })

    return (
      <div className="SearchResultsContainer"> 
        <SearchBar />
        <h1>Search Results</h1>
        <div>{ users } </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search
})
export default connect(mapStateToProps, { getUsers })(SearchResultsContainer)
