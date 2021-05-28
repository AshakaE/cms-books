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
    <div className="flex flex-col mx-24">
      <div className="pb-4 pt-7">
        <h3 className="block title uppercase tracking-wider font-body">
          Add New Book
        </h3>
      </div>
      <div className="flex justify-between relative">
        <input
          onChange={handleChange}
          type="text"
          className="w-1/2 border border-gray-200 pl-5 text-gray-300 text-base tracking-wider focus:outline-none"
          placeHolder="Book title"
        />
        <div className="flex-grow mx-10 border border-gray-200 text-gray-400 text-base tracking-wider appearance-none relative">
          <div className="absolute arrow" />
          <select
            onChange={handleChange}
            name="booksCategories"
            id="Books"
            className="w-full appearance-none h-full px-5 focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="inline-flex justify-center py-2 px-4 shadow-sm text-[13px] rounded-sm text-white btn-col hover:bg-indigo-500 focus:outline-none  w-[184px] h-[45px] uppercase text-center items-center font-rob tracking-wider font-medium"
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
