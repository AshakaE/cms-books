import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import booksReducer from './reducers/books';

const defaultState = {
  books: {
    firstBook: {
      id: Math.floor(Math.random() * 100),
      title: 'Learn programming the hard way',
      category: 'Programming',
    },
    secondBook: {
      id: Math.floor(Math.random() * 100),
      title: 'The Lean Startup',
      category: 'Novel',
    },
  },
  filter: 'All',
};

const store = createStore(booksReducer, defaultState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);