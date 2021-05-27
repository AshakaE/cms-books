import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import '../App.css';
import '../index.css';

const App = () => (
  <div className="panel-bg center">
    <div className="panel-head">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="Bookstore-CMS">Bookstore CMS</h1>
          <p className="BOOKS uppercase">Books</p>
          <p className="CATEGORIES uppercase">Categories</p>
        </div>
        <div className="Oval">
          <div className="Mask">&nbsp;</div>
        </div>
      </div>
    </div>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
