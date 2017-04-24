import React from 'react';
import ActionBar from './action_bar';
import { Link } from 'react-router';

const ControlBar = (props) => {

  return (
    <div className="profile-control-bar">
      <div className="profile-cover-photo">
        <Link to={"/profile/"+props.user.id}
          className="profile-cover-header">
          {`${props.user.fname} ${props.user.lname}`}
        </Link>
        <img 
          className="cover-img"
          src={props.user.cover_url}/>
      </div>
      <div className="profile-profile-photo">
        <img 
          className="profile-img"
          src={props.user.profile_url}/>
      </div>
      <ActionBar />
      <div className="profile-nav-bar">Profile Nav Bar</div>
    </div>
  );
};


export default ControlBar;
