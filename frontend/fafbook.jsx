import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { allFriendRequests } from './util/friendship_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser:window.currentUser,
      errors: [] }};
    store = configureStore(preloadedState);
  } else {
    store = configureStore(store);
  }

  window.store = store;
  window.allFriendRequests = allFriendRequests;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
