import React from 'react';
import { Provider } from 'react-redux';
import { 
  Router, Route, 
  IndexRoute, hashHistory, 
  IndexRedirect } from 'react-router';

import App from './app';
import SignUpPage from './signup/signup_page';
import Profile from './profile/profile';
import AllFriends from './profile/all_friends';
import AllPhotos from './profile/all_photos';
import AllAboutMe from './profile/all_about_me';
import Feed from './feed/feed.jsx';
import Home from './home/home';
import SoloPost from './post/solo_post.jsx';

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
      <Router 
        onUpdate={() => window.scrollTo(0, 0)} 
        history={hashHistory}>
        <Route path="/login" 
          component={SignUpPage} 
          onEnter={_redirectIfLoggedIn}/>
        <Route path="/" component={App} onEnter={_ensureLoggedIn}>
          <IndexRoute component={Home}/>
          <Route path="/posts/:id" component={SoloPost}/>
          <Route path="/profile/:id" component={Profile} >
            <IndexRedirect to="/profile/:id/feed" />
            <Route path="/profile/:id/feed" component={Feed}/>
            <Route path="/profile/:id/about" component={AllAboutMe}/>
            <Route path="/profile/:id/friends" component={AllFriends}/>
            <Route path="/profile/:id/photos" component={AllPhotos}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};
export default Root;
