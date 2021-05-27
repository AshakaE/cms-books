import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBookAction } from '../actions/index';
import categories from '../utils/categories';

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
    <div>
      <input onChange={handleChange} type="text" />
      <select onChange={handleChange} name="booksCategories" id="Books">
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit} type="button">
        Submit
      </button>
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
