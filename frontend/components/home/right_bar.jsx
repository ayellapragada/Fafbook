import React from 'react';

class RightBar extends React.Component {
  render() {
    return (
      <div className="inside-home-right-navbar">
        <div className="right-navbar-trending">
          Trending using Twitter API
        </div>


        <div className="right-navbar-self-promotion">
          Link to my websites
        </div>
      </div>
    );
  }
}

export default RightBar;
