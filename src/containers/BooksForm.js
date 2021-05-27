import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBookAction } from '../actions/index';
import categories from '../utils/categories';
import '../App.css';

const BooksForm = (props) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    const element = e.target.localName;
    const newState = e.target.value;

    switch (element) {
      case 'input':
        setTitle(newState);
        break;
      default:
        setCategory(newState);
        break;
    }
  };

  const handleSubmit = () => {
    const book = {
      title,
      category,
    };

    if (book.category === '') {
      book.category = 'Action';
    }

    props.dispatch(addBookAction(book));
  };

  return (
    <div className="flex flex-col">
      <h3 className="block pl-24 title pb-10">Add New Book</h3>
      <div className="flex justify-between px-24 w-">
        <input
          onChange={handleChange}
          type="text"
          className="w-1/2 border border-gray-100 pl-5"
          placeHolder="Book title"
        />
        <select
          onChange={handleChange}
          name="booksCategories"
          id="Books"
          className="flex-grow mx-10 px-4 text-gray-800"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button
          onClick={handleSubmit}
          type="button"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white btn-col hover:bg-indigo-500   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-[184px] h-[45px] uppercase text-center items-center"
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

BooksForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(BooksForm);
