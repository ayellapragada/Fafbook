import React from 'react';
import { connect } from 'react-redux';
import { friendRequest, deleteFriend } from '../../actions/friend_actions';


class FriendStatus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {requested: this.props.status}
  }


  handleClick(e) {
    e.preventDefault(e);
    debugger

    if ( this.state.requested === -2 ) {
    } else if (this.state.requested === -1) {
      this.props.friendRequest(this.props.currentUser.id, 
                               this.props.viewedUserId)
    } else {
      this.props.deleteFriend(this.props.currentUser.id, 
                              this.props.viewedUserId)
    }
  }



  render () {

    let buttonText;
    if ( this.state.requested === -2 ) {
      buttonText = "Pending"
    } else if (this.state.requested === -1) {
      buttonText = "Send Request"
    } else {
      buttonText = "Delete Friend"
    }
    return(
      <div className={"friend-request-button " + this.props.color}
        onClick={this.handleClick.bind(this)}>
        <button>
          {buttonText}
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
