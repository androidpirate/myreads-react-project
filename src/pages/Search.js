import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../components/Book'
import PropTypes from 'prop-types'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    results: []
  }

  queryBooks = event => {
    const query = event.target.value
    this.setState({query: query})
    if(query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0 &&
          this.setState({results: books})
      })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.queryBooks}/>
          </div>
        </div>
        <div className="search-books-results">
        {this.state.results.length > 0 && (
              <div>
                <h3>Found {this.state.results.length} books</h3>
                <ol className="books-grid">
                  {this.state.results.map(book => (
                    <Book
                      key={book.id}
                      books={this.props.books}
                      book={book}
                      changeShelf={this.props.changeShelf} />
                  ))}
                </ol>
              </div>
            )}
            {this.state.results.length === 0 && (
              <div>
                <h3>No results to show. Try searching a keyword.</h3>
              </div>
            )}
          </div>
        </div>
    )
  }
}

export default Search
