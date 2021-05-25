import React from 'react';
import { connect } from 'react-redux';
import bookReducer from '../reducers/books';
import Book from './Book';

const BooksList = (props) => {
  const { books } = props;
  console.log(books)
  return(
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {Object.values(books).map(book => <Book book={book} />)}
    </table>
  )
};

const mapStateToProps = (state) => {
  return {
    books: state
  }
}

export default connect(mapStateToProps)(BooksList);
