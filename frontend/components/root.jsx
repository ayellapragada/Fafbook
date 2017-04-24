import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SignUpPage from './signup/signup_page';
import Profile from './profile/profile';
import Home from './home/home';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={hashHistory}>
        <Route path="/login" 
          component={SignUpPage} 
          onEnter={_redirectIfLoggedIn}/>
       <Route path="/" component={App} onEnter={_ensureLoggedIn}>
         <IndexRoute component={Home}/>
         <Route path="/profile/:id" component={Profile}/>
       </Route>
     </Router>
   </Provider>
  );
};
export default Root;
