import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Home from './pages/Home'
import Search from './pages/Search'
import { Switch, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  async componentDidMount() {
    try {
      this.state.books = await BooksAPI.getAll()
      const books = this.state.books
      this.updateShelves(books)
    } catch (error) {
      console.log(error)
    }
  }

  updateShelves = (books) => {
    this.setState(state => ({
      currentlyReading: books.filter((book) => book.shelf === "currentlyReading"),
      wantToRead: books.filter((book) => book.shelf === "wantToRead"),
      read: books.filter((book) => book.shelf === "read")
    }))
  }

  render() {
    return (
      <div className="app">
          <Route
            exact path={"/"}
            render={({ history }) => (
              <Home
                books={this.state.books}
                currentlyReading={this.state.currentlyReading}
                wantToRead={this.state.wantToRead}
                read={this.state.read}/>
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
