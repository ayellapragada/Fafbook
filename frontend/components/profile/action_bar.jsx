import React from 'react';
import FriendStatus from './friend_status';
import EditProfileButton from './edit_profile_button';
import UploadPhoto from '../modals/upload_photo';

const ActionBar = (props) => {

  // Edit Profile, Settings VS Add / Remove friend, Message

  const handleClick = () => {
    props.createNewConversation(props.currentUser.id, props.user.id);
  };

  if (props.user.status === 0) {
    return (
      <div className="profile-action-bar">
        <EditProfileButton user={props.user} />
        <UploadPhoto 
          updateProfile={false}
          buttonType="upload-photo-modal-container"
          text={"Upload Photo"}/>

      </div>
    );
  } else {
    return (
      <div className="profile-action-bar">
        <FriendStatus user={props.user} color="profile-green"/>

        <div className={"friend-request-button message-friend-button"}
          onClick={handleClick}>
          <button>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <span className="friend-request-button-text">
              Message
            </span>
          </button>
        </div>
      </div>
    );
  }
};

export default ActionBar;
