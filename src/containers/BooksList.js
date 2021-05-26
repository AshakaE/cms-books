import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBookAction } from '../actions/index';

const BooksList = (props) => {
  const { books } = props;

  const handleRemoveBook = (book) => {
    console.log(book)
    props.dispatch(removeBookAction(book));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(books).map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  books: state,
});

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(BooksList);
