import React from 'react';
import OtherInfo from './other_info';

const AboutSideBar = (props) => {
  return(
    <div className="about-side-bar">
      <div className="about-intro">
        <div className="about-intro-header">
          <i className="fa fa-globe" aria-hidden="true"></i>
          Intro
        </div>
        <div className="about-intro-body">
          {props.user.about}
        </div>
      </div>
      <OtherInfo user={props.user} />
    </div>
  );
};

export default AboutSideBar;
