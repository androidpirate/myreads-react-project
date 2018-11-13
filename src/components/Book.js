import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  moveTo = event => {
    this.props.changeShelf(this.props.book, event.target.value)
  }

  render() {
    const bookCover = this.props.book.imageLinks && this.props.book.imageLinks.thumbnail
    const bookTitle = this.props.book.title

    let currentShelf = 'none'
    for(let item of this.props.books) {
      if(item.id === this.props.book.id) {
        currentShelf = item.shelf
        break
      }
    }

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookCover})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.moveTo} defaultValue={currentShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookTitle}</div>
          {this.props.book.authors &&
            this.props.book.authors.map((author, index) =>
              <div className="book-authors" key={index}>{author}</div>
          )}
        </div>
      </li>
    )
  }
}

export default Book
