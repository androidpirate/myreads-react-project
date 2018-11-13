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
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf title="currentlyReading" books={this.props.currentlyReading}/>
            <Shelf title="wantToRead" books={this.props.wantToRead}/>
            <Shelf title="read" books={this.props.read}/>
          </div>
          <FAB/>
      </div>

  </div>
    )
  }
}

export default Home
