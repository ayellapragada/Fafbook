import React from 'react';

const OtherInfo = (props) => {
  return(
    <div className="profile-other-info">
      {props.user.location ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span className="profile-other-info-text">
              Lives in {props.user.location}
            </span>
          </label>
        </div>
      ) : null}
      {props.user.work ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-briefcase" aria-hidden="true"></i>
            <span className="profile-other-info-text">
              Works at {props.user.work}
            </span>
          </label>
        </div>
      ) : null}
      {props.user.education ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            <span className="profile-other-info-text">
              Studied at {props.user.education}
            </span>
          </label>
        </div>
      ) : null}
      {props.user.relationship ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span className="profile-other-info-text">
              {props.user.relationship}
            </span>
          </label>
        </div>
      ) : null}
      {props.user.dob ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-birthday-cake" aria-hidden="true"></i>
            <span className="profile-other-info-text">
              Birthday: {props.user.dob}
            </span>
          </label>
        </div>
      ) : null}
      {props.user.language ? (
        <div className="profile-other-info-li">
          <label className="profile-other-info-label">
            <i className="fa fa-language" aria-hidden="true"></i>
            <span className="profile-other-info-text">
              Speaks {props.user.language}
            </span>
          </label>
        </div>
      ) : null}
    </div>
  );

};

export default OtherInfo;

