import React from 'react';
import FriendStatus from './friend_status';
import EditProfileButton from './edit_profile_button';

const ActionBar = (props) => {

  // Edit Profile, Settings VS Add / Remove friend, Message

  if (props.user.status === 0) {
    return (
      <div className="profile-action-bar">
        <EditProfileButton user={props.user} />
      </div>
    );
  } else {
  return (
    <div className="profile-action-bar">
      <FriendStatus user={props.user} color="profile-green"/>
    </div>
  );
  }
};

export default ActionBar;
