import { approveRequest, denyRequest } from '../../actions/friend_actions';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
          <Link to={`/profile/${this.props.user.id}`}>
            <div className="friend-request-info">
              <img src={this.props.user.profile_url} />
              { this.props.user.fname }&nbsp;{this.props.user.lname}
            </div>
          </Link>

          <div className="friend-request-actions">
            <button
              onClick={() => this.props.approveRequest(cuId, vuId)}
              className="friend-requests-item-button friend-requests-approve">
              Confirm
            </button>
            <button
              onClick={() => this.props.denyRequest(cuId, vuId)}
              className="friend-requests-item-button friend-requests-deny">
              Delete Request
            </button>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  approveRequest: (currentUserId, requesterUserId) => {
    dispatch(approveRequest(currentUserId, requesterUserId));},
  denyRequest: (currentUserId, requesterUserId) => {
    dispatch(denyRequest(currentUserId, requesterUserId));}
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestItem);
