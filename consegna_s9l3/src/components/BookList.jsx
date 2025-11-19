import { Component } from 'react'
import { Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

class BookList extends Component {
  render() {
    return (
      <Row className="g-4 px-4">
        {this.props.singleBook.map((book) => {
          return (
            <SingleBook
              key={book.asin}
              imageBook={book.img}
              titleBook={book.title}
              priceBook={book.price}
            />
          )
        })}
      </Row>
    )
  }
}

export default BookList
