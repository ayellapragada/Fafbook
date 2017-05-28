import React from 'react';
import { Link } from 'react-router';

class AllFriendItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const friendText = this.props.friend.friend_count > 1 ? "friends":"friend";

    return (
      <div className="all-friends-container-outer">

        <div className="all-friends-container">

          <Link to={`/profile/${this.props.friend.id}`}>
            <img src={this.props.friend.profile_url} />
          </Link>

          <div className="all-friends-name-container">

            <Link to={`/profile/${this.props.friend.id}`}>
              <div className="all-friends-name">
                {`${this.props.friend.fname} ${this.props.friend.lname}`}
              </div>
            </Link>


            <Link to={`/profile/${this.props.friend.id}/friends`}>
              <div className="friend-name-grey">
                {this.props.friend.friend_count} {friendText}
              </div>
            </Link>
          </div>

        </div>

      </div>
    );
  }
}

export default AllFriendItems;
