import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import UserProfileContainer from './components/UserProfileContainer/UserProfileContainer'
import SearchResultsContainer from './components/SearchResultsContainer/SearchResultsContainer';
import HomePageContainer from './components/HomePageContainer/HomePageContainer';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ HomePageContainer }/>
        <Route path='/search/:query' component={ SearchResultsContainer }/>
        <Route path='/user/:login' component={ UserProfileContainer }/>
      </Switch>
    </BrowserRouter>
  )
}