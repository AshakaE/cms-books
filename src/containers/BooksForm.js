import React, { useState } from 'react';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(''); 

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleChange = (e) => {
    const element = e.target.localName
    const newState = e.target.value

    switch(element){
      case 'input':
        setTitle(newState);
        break;
      default:
        setCategory(newState);
        break;
    };
  };

  return (
    <div>
      <input onChange={handleChange} type="text" />
      <select onChange={handleChange} name="booksCategories" id="Books">
        {categories.map((category) => <option key={category} value={category}>{category}</option>)}
      </select>
      <button type="button">Submit</button>
    </div>
  );
};

export default BooksForm;
