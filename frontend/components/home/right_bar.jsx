import React from 'react';
import Tweets from './tweets.jsx';

class RightBar extends React.Component {
  render() {
    return (
      <div className="inside-home-right-navbar">
        <Tweets />
      </div>
    );
  }
}

export default RightBar;
