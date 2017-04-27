import React from 'react';
import ActionBar from './action_bar';
import ProfileNavBar from './profile_nav_bar';
import UploadPhoto from  '../modals/upload_photo';
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
        <UploadPhoto
          text={"Update Profile Photo"}
          updateProfile={true}
          buttonType={"update-photo-hover"}/>
      </div>
      <div className="profile-header-space"></div>
      <ActionBar user={props.user} />
      <ProfileNavBar user={props.user}/>
    </div>
  );
};


export default ControlBar;
