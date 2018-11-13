import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Home from './pages/Home'
import Search from './pages/Search'
import { Switch, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
          <Route
            exact path={"/"}
            render={({ history }) => (
              <Home/>
            )}/>
          <Route
            exact path={"/search"}
            render={({ history }) => (
              <Search/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
