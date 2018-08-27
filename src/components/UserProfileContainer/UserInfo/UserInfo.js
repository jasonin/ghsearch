import React, { Component } from 'react'
import './UserInfo.css'

class UserInfo extends Component {

  static defaultProps = {
    value: "",
    isUrl: false,
    values: []
  }

  render() {
    return (
      <div className="UserInfo"> 
        <div className="UserInfo-prop">{ this.props.name }</div>
        <UserInfoValue isUrl={ this.props.isUrl } value={ this.props.value }/>
        <UserInfoValues values={ this.props.values }/>
      </div>
    )
  }
}

const UserInfoValue = (props) => {
  if (props.isUrl) {
    return (
      <div className="UserInfo-value">
        <a href={ props.value }>{ props.value } </a>  
      </div>
    )
  } else {
    return (
      <div className="UserInfo-value">{ props.value } </div>
    )
  }
}

const UserInfoValues = (props) => {
  const items = props.values.map((value) => {
    return (
      <div key={value.id}>
        <a href={value.url}> { value.url } </a>
      </div>
    )
  })

  return (
    <div>{items}</div>
  )
}


export default UserInfo
