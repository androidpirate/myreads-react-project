import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Home from './pages/Home'
import Search from './pages/Search'
import { Switch, Route } from 'react-router-dom'
import Background from './pages/background.png'

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

  changeShelf = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf).then(response => {
      updatedBook.shelf = shelf
      this.setState(prevState => ({
        // remove updated books from books array
        books: prevState.books.filter(book => book.id !== updatedBook.id)
        // then add updated book with new properties
        .concat(updatedBook)
      }))
      // then update all shelves
      this.updateShelves(this.state.books)
    })
  }

  render() {
    const divBackground = {
      background: '#ffcccc',
      backgroundImage: `url(${Background})`
    }

    return (
      <div className="app" style={divBackground}>
        <Switch>
          <Route
            exact path={"/"}
            render={({ history }) => (
              <Home books={this.state.books} currentlyReading={this.state.currentlyReading}
                wantToRead={this.state.wantToRead} read={this.state.read}
                changeShelf={this.changeShelf}/>
          )}/>
          <Route
            exact path={"/search"}
            render={({ history }) => (
              <Search books={this.state.books} changeShelf={this.changeShelf}/>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
