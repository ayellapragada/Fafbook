import React from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import FriendRequests from './friend_requests';


const RightNavbar = (props) => {
  if (props.currentUser){
    return (
      <div className="right-navbar">
        <img src={props.currentUser.profile_url}
          className="navbar-profile-photo"/>
        <Link className="navbar-btn profile-link"
          to={"/profile/" + props.currentUser.id}>
          {props.currentUser.fname}

        </Link>
        <Link className="navbar-btn home-link"
          to={"/"}>
          Home
        </Link>
        <div
          className="navbar-btn">
          <i className="fa fa-users" aria-hidden="true"></i>
        </div>
        <div
          className="navbar-btn">
          <i className="fa fa-comments" aria-hidden="true"></i>
        </div>
        <div
          className="navbar-btn">
          <i className="fa fa-globe" aria-hidden="true"></i>
        </div>
        <div className="navbar-btn logout-btn" 
          onClick={() => props.logout()
              .then(hashHistory.push('/login'))
              .then(() => hashHistory.push('/login'))
          }>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()).then(hashHistory.push('/login'))
});


export default connect(mapStateToProps, mapDispatchToProps)(RightNavbar);
