import React, { Component } from 'react'
import Shelf from '../components/Shelf'
import FAB from '../components/FAB'

class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf/>
            <Shelf/>
            <Shelf/>
          </div>
          <FAB/>
      </div>

  </div>
    )
  }
}

export default Home
