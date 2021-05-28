import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, handleRemoveBook }) {
  return (
    <div className="book-panel flex mb-6">
      <div className="flex flex-col w-1/3 p-5">
        <div className="School-of">{book.category}</div>
        <div className="bp-title">{book.title}</div>
        <div className="bs-text">Author</div>
        <div className="flex my-8">
          <div className="bs-text mr-5">Comments</div>
          <button className="bs-text mr-5" type="button" onClick={() => handleRemoveBook(book)}>
            Remove
          </button>
          <div className="bs-text">Edit</div>
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <div className="Oval-2 mr-5" />
        <div>
          <div className="percent">%100</div>
          <div className="Completed">Completed</div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center">
        <div>
          <div className="gs-text">CURRENT CHAPTER</div>
          <div className="black-s-text mb-4">Chapter 00</div>
          <div className="upgrade-btn">UPDATE PROGRESS</div>
        </div>
      </div>
    </div>
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
