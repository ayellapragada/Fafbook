import React from 'react';
import { Link } from  'react-router';

const ProfileNavBar = (props) => {

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="profile-nav-bar-container">
      <ul className="profile-nav-bar">
        <li className="profile-nav-link profile-nav-empty"></li>
        <Link to={`/profile/${props.user.id}/feed`}>
          <li 
            className="profile-nav-link profile-nav-timeline">
            Timeline
          </li>
        </Link>
        <Link to={`/profile/${props.user.id}/about`}>
          <li 
            className="profile-nav-link profile-nav-about">
            About
          </li>
        </Link>
        <Link to={`/profile/${props.user.id}/friends`}>
          <li 
            className="profile-nav-link profile-nav-friends">
            Friends &nbsp;
            <span className='grey'>
              {props.user.friend_count} 
            </span>
          </li>
        </Link>
        <Link to={`/profile/${props.user.id}/photos`}>
          <li 
            className="profile-nav-link profile-nav-photos">
            Photos
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ProfileNavBar;
