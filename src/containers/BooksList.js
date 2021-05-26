import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './components/Book';

const BooksList = (props) => {
  const { books } = props;
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
        {Object.values(books).map((book) => <Book key={book.id} book={book} />)}
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
