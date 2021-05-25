import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import booksReducer from './reducers/books';

const defaultState = {
  firstBook: {
    id: Math.random(Math.random() * 100),
    title: 'Learn programming the hard way',
    category: 'Programming',
  },
  secondBook: {
    id: Math.random(Math.random() * 100),
    title: 'The Lean Startup',
    category: 'Novel',
  },
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
