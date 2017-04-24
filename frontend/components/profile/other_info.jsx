import React from 'react';

const OtherInfo = (props) => {
  return(
    <div className="profile-other-info">
      {props.user.location ? (
        <div className="profile-other-info-li">
          Lives in {props.user.location}
        </div>
      )
      : null}
    </div>
  );

};

export default OtherInfo;

