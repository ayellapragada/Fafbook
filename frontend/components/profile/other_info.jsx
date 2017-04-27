import React from 'react';

const OtherInfo = (props) => {
  return(
    <div className="profile-other-info">
      {props.user.location ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            Lives in {props.user.location}
          </label>
        </div>
      ) : null}
      {props.user.work ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-briefcase" aria-hidden="true"></i>
            Works at {props.user.work}
          </label>
        </div>
      ) : null}
      {props.user.education ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            Studied at {props.user.education}
          </label>
        </div>
      ) : null}
      {props.user.relationship ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-heart" aria-hidden="true"></i>
            {props.user.relationship}
          </label>
        </div>
      ) : null}
      {props.user.dob ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-birthday-cake" aria-hidden="true"></i>
            Birthday: {props.user.dob}
          </label>
        </div>
      ) : null}
      {props.user.language ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-language" aria-hidden="true"></i>
            Speaks {props.user.language}
          </label>
        </div>
      ) : null}
    </div>
  );

};

export default OtherInfo;

