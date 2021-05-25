import React from 'react';

const BooksForm = () => {
  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

  return (
    <div>
      <input type='text'></input>
      <select name="booksCategories" id="Books">
        {categories.map(category => { <option value={category}></option> })}
      </select>
      <button type='button'>Submit</button>
    </div>
  );
}

export default BooksForm;