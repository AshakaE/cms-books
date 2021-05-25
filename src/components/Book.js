import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <div>
      <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
      </tr>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Book;
