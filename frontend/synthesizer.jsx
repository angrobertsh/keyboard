import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import configureStore from './store/store';
import Root from './components/root';



const store = configureStore();


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
