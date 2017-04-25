import React from 'react';
import FriendStatus from './friend_status';

const ActionBar = (props) => {

  // Edit Profile, Settings VS Add / Remove friend, Message
  return (
    <div className="profile-action-bar">
      <FriendStatus user={props.user} color="profile-green"/>
    </div>
  )
}

export default ActionBar;
