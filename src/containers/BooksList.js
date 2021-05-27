import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBookAction, changeFilterAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const { books } = props;

  const handleRemoveBook = (book) => {
    props.dispatch(removeBookAction(book));
  };

  const handleFilterChange = (e) => {
    const option = e.target.value;
    props.dispatch(changeFilterAction(option));
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
        <tr>
          <CategoryFilter handleFilterChange={handleFilterChange} />
        </tr>
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(BooksList);
