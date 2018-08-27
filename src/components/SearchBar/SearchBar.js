import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { updateSearchQuery, getUsers } from '../../actions'

import './SearchBar.css'
import SearchInput from './SearchInput/SearchInput'
import Loader from '../common/Loader/Loader'

class SearchBar extends Component {  

  shouldComponentUpdate(nextProps) {    
    if (nextProps.search.query !== this.props.search.query) {
      this.searchResult()
    } 
    return true
  }

  searchResult = _.debounce(() => {
    if (this.props.search.query !== "") {
      this.props.getUsers(this.props.search.query)
      this.props.history.push("/search/" + this.props.search.query)
    }
  }, 600)

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-container">
          <SearchInput autoFocus="true" placeholder="Search" onChange={this.props.updateSearchQuery}/>
          <Loader display={this.props.search.fetching}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search
})
export default withRouter(connect(mapStateToProps, { updateSearchQuery, getUsers })(SearchBar))
