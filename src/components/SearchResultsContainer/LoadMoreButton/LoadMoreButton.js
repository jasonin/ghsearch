import React, { Component } from 'react';
import './LoadMoreButton.css'
import '../../common/Loader/Loader'
import Loader from '../../common/Loader/Loader';

class LoadMoreButton extends Component {  
  render() {

    if (this.props.search.fetching) {
      return (
        <Loader display={this.props.search.fetching} />
      )
    }

    if (this.props.search.hasNextPage) {
      return (
        <div className="LoadMoreButton" onClick={ () => this.props.onClick(this.props.search.query, this.props.search.currPage+1) }>
          Load More
        </div>
      )
    } else {
      return null
    }
  }
}

export default LoadMoreButton
