import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div>
      <input type="text" />
      <select name="booksCategories" id="Books">
        {categories.map((category) => <option key={category} value={category}>{category}</option>)}
      </select>
      <button type="button">Submit</button>
    </div>
  );
};

export default BooksForm;
