import React from 'react';

const EditProfileButton = (props) => {

  return (
    <div className="edit-profile-btn-container">
      <button>
        <i className="fa fa-pencil" aria-hidden="true"></i>
        <span className="edit-profile-btn-text">
          Edit Profile
        </span>
      </button>
    </div>
  );
};

export default EditProfileButton;
