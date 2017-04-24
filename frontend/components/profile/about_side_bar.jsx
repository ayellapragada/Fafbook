import React from 'react';
import OtherInfo from './other_info';

const AboutSideBar = (props) => {
  return(
    <div className="about-side-bar">
      <div className="about-intro">
        <i className="fa fa-globe" aria-hidden="true"></i>
        Intro
      </div>
      <OtherInfo />
    </div>
  );
};

export default AboutSideBar;
