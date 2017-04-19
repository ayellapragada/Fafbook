import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SignUpPage from './signup/signup_page';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/login" component={SignUpPage}/>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
);

export default Root;
