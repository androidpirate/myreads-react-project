import React, { Component } from 'react'
import Shelf from '../components/Shelf'
import FAB from '../components/FAB'
import PropTypes from 'prop-types'

class Home extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf title="Currently Reading"
              books={this.props.currentlyReading}
              changeShelf={this.props.changeShelf}/>
            <Shelf title="Want To Read"
              books={this.props.wantToRead}
              changeShelf={this.props.changeShelf}/>
            <Shelf title="Read"
              books={this.props.read}
              changeShelf={this.props.changeShelf}/>
          </div>
          <FAB/>
      </div>

  </div>
    )
  }
}

export default Home
