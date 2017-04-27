import React from 'react';

const ProfileNavBar = (props) => {

  const onClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className="profile-nav-bar-container">
      <ul className="profile-nav-bar">
        <li className="profile-nav-link profile-nav-empty"></li>
        <li 
          onClick={onClick}
          className="profile-nav-link profile-nav-timeline">
          Timeline
        </li>
        <li 
          onClick={onClick}
          className="profile-nav-link profile-nav-about">
          About
        </li>
        <li 
          onClick={onClick}
          className="profile-nav-link profile-nav-friends">
          Friends  <span className='grey'> {props.user.friend_count} </span>
        </li>
        <li 
          onClick={onClick}
          className="profile-nav-link profile-nav-photos">
          Photos
        </li>
        <li 
          onClick={onClick}
          className="profile-nav-link profile-nav-more">
          More
        </li>
      </ul>
    </div>
  )
}

export default ProfileNavBar;
