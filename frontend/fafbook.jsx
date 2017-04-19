import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

window.store = configureStore();
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to fafbook!</h1>, root);
});
