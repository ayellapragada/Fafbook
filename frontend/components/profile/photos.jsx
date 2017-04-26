import React from 'react';

const Photos = (props) => {

  const mappedPhotos = props.user.photos.map((photo) => (
    <img src={photo.url} className="profile-sidebar-photos" key={photo.id}/>
  ));

  return(
    <div className="profile-sidebar-section">
      <h3 className="profile-sidebar-header">
        <i className="fa fa-picture-o" aria-hidden="true"></i>
        Photos 
      </h3>
      <div className="profile-sidebar-both-container">
        <ul className="profile-sidebar-photos-container">
          {mappedPhotos}
        </ul>
      </div>
    </div>
  );

};

export default Photos;
