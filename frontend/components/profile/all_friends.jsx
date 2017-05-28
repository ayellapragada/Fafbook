import React from 'react';
import AllFriendItem from './all_friend_item.jsx';
import { connect } from 'react-redux';
import { fetchUserFriends } from '../../actions/user_actions.js';


class AllFriends extends React.Component {
  componentDidMount() {
    this.props.fetchUserFriends(this.props.user.id);
  }

  render() {
    const allFriends = this.props.friends.map(friend => {
      return (
        <AllFriendItem 
          key={friend.id}
          friend={friend} 
          user={this.props.user} />
      );
    });

    return (
      <div>
        <div className="all-friends-header">
          <i className="fa fa-users" aria-hidden="true"></i>
          Friends
        </div>
        <div className="all-friends-square">
          <ul>
            {allFriends}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  friends: state.user.friends
});

const mapDispatchToProps = dispatch => ({
  fetchUserFriends: (id) => dispatch(fetchUserFriends(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(AllFriends);
