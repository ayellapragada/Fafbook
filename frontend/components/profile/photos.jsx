import React from 'react';
import OpenPicture from '../modals/open_picture';

const Photos = (props) => {

  const mappedPhotos = props.user.photos.map((photo) => (
    <OpenPicture key={photo.id} url={photo.url} />
  ));

  if (mappedPhotos.length === 0) {
    mappedPhotos.push("No photos for this user!")
  };

  return(
    <div className="about-side-bar">
      <h3 className="profile-sidebar-header profile-sidebar-photos-header">
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
