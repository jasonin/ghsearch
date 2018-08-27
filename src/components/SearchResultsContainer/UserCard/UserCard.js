import React, { Component } from 'react'

import './UserCard.css'

class UserCard extends Component {

  render() {
    return (
      <div className="UserCard"> 
        <a href={"/user/" + this.props.data.login}>
          <img src={this.props.data.avatar_url} alt={this.props.data.avatar_url}></img>
          <h3>{ this.props.data.login }</h3>
        </a>   
      </div>
    )
  }
}

export default UserCard
