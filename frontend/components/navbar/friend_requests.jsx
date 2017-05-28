import React from 'react';
import { connect } from 'react-redux';
import FriendRequestItem from './friend_request_item';
import { allFriendRequests } from '../../actions/friend_actions';

class FriendRequests extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.allFriendRequests();
  }

  render() {
    const friends = Object.values(this.props.friends);
    const requests = friends.map((request) => (
      <FriendRequestItem key={request.id} user={request}/>
    ));

    if (requests.length === 0) {
      requests.push(
        <li key={'1abc'} className="no-new-requests">
          No new requests
        </li>
      );
    }
    return (
      <div className="friend-requests-container">
        <p> Friend Requests </p>
        <ul>
          {requests}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends
});

const mapDispatchToProps = dispatch => ({
  allFriendRequests: () => (dispatch(allFriendRequests())),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequests);
