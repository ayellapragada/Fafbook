import React from 'react';

class LeftBar extends React.Component {
  render() {
    return (
      <div className="inside-home-left-navbar">
        <div className="home-side-nav-user">
          Current User Name
        </div>

        <div className="left-navbar-main">
          <i className="fa fa-newspaper-o" aria-hidden="true"></i>
          NewsFeed
          <br/>
          <i className="fa fa-comments" aria-hidden="true"></i>
          Messenger
        </div>

        <div className="left-navbar-advertisting">
          <i className="fa fa-star" aria-hidden="true"></i>
          Explore!
        </div>
      </div>
    );
  }
}

export default LeftBar;
