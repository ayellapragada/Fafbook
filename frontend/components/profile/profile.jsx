import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

import ControlBar from './control_bar';
import AboutSideBar from './about_side_bar';
import Photos from './photos';
import Friends from './friends';
import Feed from '../feed/feed';
import { openChat } from '../../actions/chat_actions.js';
import { fetchUser, receiveViewedUser } from '../../actions/user_actions';
import { createNewConversation } from '../../actions/message_actions'; 

class Profile extends React.Component {
  constructor(props) {
    super();
    this.state = {loading: true};
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
      .then( () => this.setState({loading: false}));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.setState({loading: true});
      this.props.fetchUser(nextProps.userId)
        .then( () => this.setState({loading: false}));
    }
  }

  componentWillUnmount() {
    this.setState({loading: true});
  }

  render() {
    const user = this.props.user;
    const currentUser = this.props.currentUser;

    if (this.state.loading) {
      return (
        <div className="profile">
          <div className="loader">Loading...</div>
        </div>
      );
    }


    if (user.status === -2) {
      return (
        <div className="profile">
          <ControlBar 
            createNewConversation = {this.props.createNewConversation}
            openChat = {this.props.openChat}
            user={user} 
            currentUser={currentUser} />
          <div className="do-you-know-box">
            Do you know {user.fname}?
          </div>
          <div className="do-you-know-box-content">
            To see what {user.gender ? "he" : "she"} shares,
            send {user.gender ? "him" : "her"} a friend request.
          </div>
        </div>
      );
    }

    else if (user.status === -1) {
      return (
        <div className="profile">
          <ControlBar 
            createNewConversation = {this.props.createNewConversation}
            openChat = {this.props.openChat}
            user={user} 
            currentUser={currentUser} />
          <div className="do-you-know-box">
            Do you know {user.fname}?
          </div>
          <div className="do-you-know-box-content">
            Request sent.
          </div>
        </div>
      );
    }

    else if (user.status === -3) {
      return (
        <div className="profile">
          <ControlBar 
            createNewConversation = {this.props.createNewConversation}
            openChat = {this.props.openChat}
            user={user} 
            currentUser={currentUser} />
          <div className="do-you-know-box">
            Do you know {user.fname}?
          </div>
          <div className="do-you-know-box-content">
            Accept or deny this person's friend request!
          </div>
        </div>
      );
    }

    // So instead of <Feed /> below, we make it { children } or some shit.

    else if (user.id > 0){
      return (
        <div className="profile">
          <DocumentTitle title={`${user.fname} ${user.lname}`} />
          <div className="profile-header">
            <ControlBar 
              createNewConversation = {this.props.createNewConversation}
              openChat = {this.props.openChat}
              user={user} 
              currentUser={currentUser} />
          </div>

          <div className="profile-body">
            <div className="profile-sidebar-not-feed">
              <AboutSideBar user={user} />
              <Photos user={user} />
              <Friends user={user} />
            </div>

            <div className="profile-feed">
              <Feed />
            </div>
          </div>
        </div>
      );
    }

  }
}
const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  userId: ownProps.params.id,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  clearUser: () => dispatch(receiveViewedUser(null)),
  createNewConversation: (senderId, recipientId) => dispatch(
    createNewConversation(senderId, recipientId)),
  openChat: (chat) => dispatch(openChat(chat)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
