import React from 'react';

import LeftBar from './left_bar';
import RightBar from './right_bar';
import Timeline from '../feed/timeline';

const Home = () => {

  return(
    <div className="home">
      <div className="home-left-bar">
        <LeftBar />
      </div>
      <div className="timeline">
        <Timeline />
      </div>
      <div className="home-right-bar">
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
