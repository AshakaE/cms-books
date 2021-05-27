import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import '../App.css';

const App = () => (
  <div className="panel-bg center">
    <div className="panel-head">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <p>Books</p>
      <p>Categories</p>
    </div>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
