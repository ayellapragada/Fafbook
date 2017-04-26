import { approveRequest, denyRequest } from '../../actions/friend_actions';
import React from 'react';
import { connect } from 'react-redux';

class FriendRequestItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cuId = this.props.currentUser.id;
    const vuId = this.props.user.id;
    return (
      <li>
        <div className="friend-requests-item">
          { this.props.user.fname }
          <button
            onClick={() => this.props.approveRequest(cuId, vuId)}
            className="friend-requests-item-button friend-requests-approve">
            Approve
          </button>
          <button
            onClick={() => this.props.denyRequest(cuId, vuId)}
            className="friend-requests-item-button friend-requests-deny">
            Deny
          </button>
        </div>
      </li>
    )
  }
};

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  approveRequest: (currentUserId, requesterUserId) => {
    dispatch(approveRequest(currentUserId, requesterUserId)) },
  denyRequest: (currentUserId, requesterUserId) => {
    dispatch(denyRequest(currentUserId, requesterUserId)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestItem)
