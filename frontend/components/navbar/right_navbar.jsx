import React from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const RightNavbar = (props) => {
  return (
  <div className="right-navbar">
    <Link to="/profile">HI NAVBAR HERE</Link>
    <button className="logout-button" onClick={() => props.logout().then(hashHistory.push('/login'))}>Log Out</button>
    </div>
    )
}


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()).then(()=> hashHistory.push('/login'))
});


export default connect(mapStateToProps, mapDispatchToProps)(RightNavbar);
