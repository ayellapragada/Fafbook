import React from 'react';
import { Link } from 'react-router';

const Friends = (props) => {

  const mappedFriends = props.user.friends.map((friend) => (
    <Link to={"/profile/" + friend.id} key={friend.id}>
      <img src={friend.profile_url} className="profile-sidebar-photos"/>
    </Link>
  ));
  return(
    <div className="profile-sidebar-section">
      <h3 className="profile-sidebar-header">
        <i className="fa fa-users" aria-hidden="true"></i>
        Friends · {props.user.friend_count}
      </h3>
      <div className="profile-sidebar-both-container">
        <ul className="profile-sidebar-photos-container">
          {mappedFriends}
        </ul>
      </div>
    </div>
  );

};

export default Friends;

