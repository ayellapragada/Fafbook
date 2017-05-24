import React from 'react';
import { allFriendRequests } from '../../actions/friend_actions';
import { countAction } from '../../actions/count_actions.js';
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

  componentWillUnmount() {
    this.chatRoom.unbind();
    this.pusher.unsubscribe(this.chatRoom);
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

    this.props.countAction(friends, 'UNRESPONDED');
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
  allFriendRequests: () => (dispatch(allFriendRequests())),
  countAction: (count, type) => dispatch(countAction(count, type)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(UnrespondedRequests);
