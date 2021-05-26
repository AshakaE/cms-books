import React from 'react';
import '../App.css';
import BooksForm from './BooksForm';
import BooksList from './BooksList';

const App = () => (
  <div>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
