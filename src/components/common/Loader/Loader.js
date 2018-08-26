import React, { Component } from 'react'
import './Loader.css'

class Loader extends Component {

  render() {
    if (this.props.display) {
      return(
        <div className="lds-dual-ring"></div>
      )
    } else {
      return (
        <div className="empty-lds-dual-ring"></div>
      )
    }
  }
} export default Loader
