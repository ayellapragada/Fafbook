import React from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


const RightNavbar = (props) => {
  if (props.currentUser){
  return (
  <div className="right-navbar">
    <Link 
      to={"/profile/" + props.currentUser.id}
    >HI NAVBAR HERE</Link>
    <button className="logout-button" 
      onClick={() => props.logout()
          .then(hashHistory.push('/login'))
          .then(() => hashHistory.push('/login'))
      }>
      Log Out</button>
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
