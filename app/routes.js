// jshint esversion: 6, asi:true
// eslint-env es6

import React from 'react'

import { IndexRoute, Route } from 'react-router'
import App from './components/App'
import Playlists from './components/playlists/Playlists'
import NotFound from './components/NotFound'

export default function getRoutes ({ dispatch }) {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={Playlists} />
    </Route>
  )
}
