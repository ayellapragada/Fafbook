import React from 'react';
import { allFriendRequests } from '../../actions/friend_actions';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';

class UnrespondedRequests extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.pusher = new Pusher('7e8e957ce7d0485a1034');
    this.chatRoom = this.pusher.subscribe('requests');
  }

  componentDidMount() {
    const currentUser = this.props.currentUser;

    this.chatRoom.bind('new_request', 
      (data) => {
        if (data.requested_id === currentUser.id) {
          this.props.allFriendRequests();
        }
      });
  }

  render() {
    const friends = Object.values(this.props.friends).length;

    if (friends) {
      return (
        <div className="notification">
          {friends}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  friends: state.friends
});

const mapDispatchToProps = dispatch => ({
  allFriendRequests: () => (dispatch(allFriendRequests()))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(UnrespondedRequests);
