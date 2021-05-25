import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import booksReducer from './reducers/books';

const defaultState = {
    {
      id: Math.random(Math.random() * 100),
      title: 'Learn programming the hard way',
      category: 'Programming',
    },
    {
      id: Math.random(Math.random() * 100),
      title: 'The Lean Startup',
      category: 'Novel',
    },
};

const store = createStore(booksReducer, defaultState);

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
