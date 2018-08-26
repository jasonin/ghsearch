import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import UserProfileContainer from './components/UserProfileContainer/UserProfileContainer'
import SearchResultsContainer from './components/SearchResultsContainer/SearchResultsContainer';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/search/:query' component={ SearchResultsContainer }/>
        <Route path='/user/:login' component={ UserProfileContainer }/>
      </Switch>
    </BrowserRouter>
  )
}