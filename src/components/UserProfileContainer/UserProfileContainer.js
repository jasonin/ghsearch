import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getUserProfile, getUserFollowers, getUserFollowing, getUserRepos } from '../../actions'
import './UserProfileContainer.css'

import SearchBar from '../SearchBar/SearchBar'
import UserInfo from './UserInfo/UserInfo'

class UserProfileContainer extends Component {

  componentDidMount() {
    const { match: { params } } = this.props
    this.props.getUserProfile(params.login)
    this.props.getUserFollowers(params.login)
    this.props.getUserFollowing(params.login)
    this.props.getUserRepos(params.login)
  }

  render() {
    const {
      login,
      id,
      node_id,
      avatar_url,
      gravatar_id,
      url,
      html_url,
      followers_url,
      following_url,
      gists_url,
      starred_url,
      subscriptions_url,
      organizations_url,
      repos_url,
      events_url,
      receveied_events_url,
      type,
      site_admin,
      score,
      name,
      company,
      blog,
      location,
      email,
      hireable,
      bio
    } = this.props.user.profile

    return (
      <div className="container UserProfileContainer">
        <SearchBar />
        <UserInfo name="login" value={login}/>
        <UserInfo name="id" value={id}/>
        <UserInfo name="node_id" value={node_id}/>
        <UserInfo name="avatar_url" value={avatar_url} isUrl={true}/>
        <UserInfo name="gravatar_id" value={gravatar_id}/>
        <UserInfo name="url" value={url} isUrl={true}/>
        <UserInfo name="html_url" value={html_url} isUrl={true}/>

        <UserInfo name="followers" values={ this.props.user.followers }/>
        <UserInfo name="following" values={ this.props.user.following }/>

        <UserInfo name="gists_url" value={gists_url} isUrl={true}/>
        <UserInfo name="starred_url" value={starred_url} isUrl={true}/>
        <UserInfo name="subscriptions_url" value={subscriptions_url} isUrl={true}/>
        <UserInfo name="organizations_url" value={organizations_url} isUrl={true}/>

        <UserInfo name="repos" values={ this.props.user.repos }/>
        
        <UserInfo name="events_url" value={events_url} isUrl={true}/>
        <UserInfo name="receveied_events_url" value={receveied_events_url} isUrl={true}/>
        <UserInfo name="type" value={type}/>
        <UserInfo name="site_admin" value={site_admin}/>
        <UserInfo name="score" value={score}/>
        <UserInfo name="name" value={name}/>
        <UserInfo name="score" value={score}/>
        <UserInfo name="company" value={company}/>
        <UserInfo name="blog" value={blog}/>
        <UserInfo name="location" value={location}/>
        <UserInfo name="email" value={email}/>
        <UserInfo name="hireable" value={hireable}/>
        <UserInfo name="bio" value={bio}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})
export default connect(mapStateToProps, { getUserProfile, getUserFollowers, getUserFollowing, getUserRepos })(UserProfileContainer)
