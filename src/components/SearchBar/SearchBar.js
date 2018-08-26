import React, { Component } from 'react';
import _ from 'lodash'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { updateSearchQuery, getUsers } from '../../actions'

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
        <input autoFocus onChange={ (e) => this.props.updateSearchQuery(e.target.value) } ></input>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search
})
export default withRouter(connect(mapStateToProps, { updateSearchQuery, getUsers })(SearchBar))
