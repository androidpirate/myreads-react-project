import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Shelf extends Component {
  static propTypes= {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) =>
              <Book
                key={book.id}
                books={this.props.books}
                book={book}
                changeShelf={this.props.changeShelf}
              />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
