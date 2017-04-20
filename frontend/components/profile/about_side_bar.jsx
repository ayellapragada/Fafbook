import React from 'react';
import { connect } from 'react-redux';

const AboutSideBar = ({props}) => (
  <div className="about-side-bar">
    <p>{props.fname}</p>
  </div>
) 


const mapStateToProps = state => {
  return({
    fname: state.session.currentUser.fname
  })
} 

const mapDispatchToProps = dispatch => ({});


export default connect(mapStateToProps, mapDispatchToProps)(AboutSideBar);
