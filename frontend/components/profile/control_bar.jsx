import React from 'react';

const ControlBar = (props) => {

  return (
    <div className="profile-control-bar">
      <div className="profile-cover-photo">
        <img 
          className="cover-img"
          src={props.user.cover_url}/>
      </div>
      <div className="profile-profile-photo">
        <img 
          className="profile-img"
          src={props.user.profile_url}/>
      </div>
      <div className="action-bar">Friend Request / Message</div>
      <div className="profile-nav-bar">Profile Nav Bar</div>
    </div>
  );
};


export default ControlBar;
