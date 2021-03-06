import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import '../App.css';
import '../index.css';

const App = () => (
  <div className="panel-bg m-auto my-10 shadow-2xl ">
    <div className="panel-head m-auto border-b-2 border-gray-100 w-full">
      <div className="flex items-center m-auto justify-between h-full w-[1200px]">
        <div className="flex items-center">
          <h1 className="Bookstore-CMS">Bookstore CMS</h1>
          <p className="BOOKS uppercase hover:text-gray-900 cursor-pointer">
            Books
          </p>
          <p className="CATEGORIES uppercase hover:text-gray-900 cursor-pointer">
            Categories
          </p>
        </div>
        <div className="Oval rounded-full flex cursor-pointer">
          <FontAwesomeIcon icon={faUser} className="Mask" />
        </div>
      </div>
    </div>
    <div className="h-[500px] overflow-auto">
      <BooksList />
    </div>
    <BooksForm />
  </div>
);

export default App;
