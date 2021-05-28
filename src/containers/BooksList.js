import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBookAction, changeFilterAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const { books, filter } = props;

  const handleRemoveBook = (book) => {
    props.dispatch(removeBookAction(book));
  };

  const handleFilterChange = (e) => {
    const option = e.target.value;
    props.dispatch(changeFilterAction(option));
  };

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div className="m-auto w-[1200px]">
        <div>
          {Object.values(books).map((book) => {
            if (filter !== 'All') {
              if (filter === book.category) {
                return (<Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />);
              }
            } else {
              return (<Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />);
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(BooksList);
