import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import booksReducer from './reducers/books';
import filterReducer from './reducers/filter';

const defaultState = {
  books: {
    firstBook: {
      id: Math.floor(Math.random() * 100),
      title: 'Learn programming the hard way',
      category: 'Action',
    },
    secondBook: {
      id: Math.floor(Math.random() * 100),
      title: 'The Lean Startup',
      category: 'Sci-Fi',
    },
  },
  filter: 'All',
};

const rootReducer = combineReducers({ books: booksReducer, filter: filterReducer });

const store = createStore(rootReducer, defaultState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
