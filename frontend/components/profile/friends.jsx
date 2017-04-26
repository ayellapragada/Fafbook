import React from 'react';
import { Link } from 'react-router';

const Friends = (props) => {

  const mappedFriends = props.user.friends.map((friend) => (
    <Link to={"/profile/" + friend.id} key={friend.id}>
      <img src={friend.profile_url} className="profile-sidebar-photos"/>
    </Link>
  ));
  return(
    <div className="profile-sidebar-friends">
      <h3 className="profile-sidebar-header">
        <i className="fa fa-users" aria-hidden="true"></i>
        Friends 
      </h3>
      <ul className="profile-sidebar-photos-container">
        {mappedFriends}
      </ul>
    </div>
  );

};

export default Friends;

