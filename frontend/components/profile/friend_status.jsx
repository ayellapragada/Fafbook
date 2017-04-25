import React from 'react';
import { connect } from 'react-redux';
import { friendRequest, deleteFriend } from '../../actions/friend_actions';


class FriendStatus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {requested: this.props.status}
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.viewedUserId != nextProps.viewedUserId) {
      this.setState({requested: nextProps.status})
    }
  }

  handleClick(e) {
    e.preventDefault(e);

    if ( this.state.requested === -2 ) {
    } else if (this.state.requested === -1) {
      this.props.friendRequest(this.props.currentUser.id, 
        this.props.viewedUserId)
      this.setState({requested: -2})
    } else if (this.props.currentUser.id === this.props.viewedUser.id) {
      console.log('This eventually leads to modal for user editing');
    } else {
      this.props.deleteFriend(this.props.currentUser.id, 
        this.props.viewedUserId)
      this.setState({requested: 0});
      debugger
    }
  }



  render () {
    let buttonText;
    if ( this.state.requested === -2 ) {
      buttonText = "Friend Request Sent"
    } else if (this.state.requested === -1) {
      buttonText = "Add Friend"
    } else if (this.props.currentUser.id === this.props.viewedUser.id) {
      buttonText = "Edit Account"
    } else {
      buttonText = "Delete Friend"
    }
    return(
      <div className={"friend-request-button " + this.props.color}
        onClick={this.handleClick.bind(this)}>
        <button>
          <i className="fa fa-user" aria-hidden="true"></i>
          <span className="friend-request-button-text">
            {buttonText}
          </span>
        </button>
      </div>
    )
  }


}


const mapStateToProps = (state, ownProps) => {

  return({
    currentUser: state.session.currentUser,
    viewedUser: state.user,
    viewedUserId: ownProps.realId,
    status: ownProps.status,
  })
}


const mapDispatchToProps = (dispatch) =>  {
  return ({
    friendRequest: (currentUserId, requestedUserId) => (dispatch(friendRequest(currentUserId, requestedUserId))),
    deleteFriend: (currentUserId, requesterUserId) => (dispatch(deleteFriend(currentUserId, requesterUserId)))
  });
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendStatus);
