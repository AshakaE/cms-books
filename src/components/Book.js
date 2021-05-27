import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, handleRemoveBook }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        {' '}
        <button type="button" onClick={() => handleRemoveBook(book)}>
          delete book
        </button>
        {' '}
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
