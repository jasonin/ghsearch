import React, { Component } from 'react';
import './SearchInput.css'

class SearchInput extends Component {  
  render() {
    return (
      <div className="SearchInput">
        <input type="text" autoFocus={this.props.autoFocus} placeholder={this.props.placeholder} onChange={ (e) => this.props.onChange(e.target.value) } ></input>
      </div>
    )
  }
}

export default SearchInput
