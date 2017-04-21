import React from 'react';
import { connect } from 'react-redux';

const AboutSideBar = (props) => (
  <div className="about-side-bar">
    <p>{props.user.fname}</p>
  </div>
) 


const mapStateToProps = state => {
  return({
    user: state.session.currentUser
  })
} 

const mapDispatchToProps = dispatch => ({});


export default connect(mapStateToProps, mapDispatchToProps)(AboutSideBar);
