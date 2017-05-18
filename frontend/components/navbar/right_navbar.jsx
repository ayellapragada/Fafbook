import React from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import onClickOutside from 'react-onclickoutside';
import { logout } from '../../actions/session_actions';
import { fetchAllConversations, 
  readConversations } from '../../actions/message_actions';
import { allFriendRequests } from '../../actions/friend_actions';
import { getAllNotifications } from '../../actions/notification_actions.js';
import FriendRequests from './friend_requests';
import Notifications from './notifications.jsx';
import Chat from './chat';
import UnrespondedRequests from './unresponded_requests.jsx';
import Unread from './unread.jsx';
import Unopened from './unopened.jsx';
import DocumentTitle from 'react-document-title';


class RightNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = (
      { requests: false, 
        chat: false, 
        notifications: false
      });
    this.toggleRequests = this.toggleRequests.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.handleChat = this.handleChat.bind(this);
    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllConversations();
    this.props.allFriendRequests();
    this.props.getAllNotifications();
  }

  toggleRequests() {
    this.setState({chat: false, notifications: false});
    const opposite = !this.state.requests; 
    this.setState({requests: opposite });
  }

  toggleChat() {
    this.setState({requests: false, notifications: false});
    const opposite = !this.state.chat; 
    this.setState({chat: opposite });
  }

  toggleNotifications() {
    this.setState({requests: false, chat: false});
    const opposite = !this.state.notifications; 
    this.setState({notifications: opposite });
  }

  handleChat() {
    this.toggleChat();
  }

  handleClickOutside (evt) {
    this.setState({requests: false, chat: false, notifications: false});
  }

  render() {
    if (this.props.currentUser){
      return (
        <div className="right-navbar">
          <Link className="navbar-btn profile-link right-navbar-words"
            to={"/profile/" + this.props.currentUser.id}>
            <img src={this.props.currentUser.profile_url}
              className="navbar-profile-photo"/>
            {this.props.currentUser.fname}
          </Link>

          <div className="empty-border-left"></div>
          <Link className="navbar-btn home-link right-navbar-words"
            to={"/"}>
            Home
          </Link>

          <div
            onClick={this.toggleRequests}
            className={`navbar-btn ${this.state.requests ? "active-btn" : ""}`}>
            <i className="fa fa-users" aria-hidden="true"></i>
            <div className="relative-unread">
              <UnrespondedRequests />
            </div>
          </div>

          <div className="friend-requests-dropdown">
            { this.state.requests && <FriendRequests/> }
            { this.state.chat && <Chat toggleChat={this.toggleChat} /> }
            { this.state.notifications && <Notifications /> }
          </div>

          <div
            id="chat-dropdown"
            onClick={this.handleChat}
            className={`navbar-btn ${this.state.chat ? "active-btn" : ""}`}>
            <i className="fa fa-comments" aria-hidden="true"></i>
            <div className="relative-unread">
              <Unread />
            </div>
          </div>

          <div
            onClick={this.toggleNotifications}
            className=
            {`navbar-btn ${this.state.notifications ? "active-btn" : ""}`}>
            <i className="fa fa-globe" aria-hidden="true"></i>
            <div className="relative-unread">
              <Unopened />
            </div>
          </div>

          <div className="empty-border"></div>

          <div className="navbar-btn logout-btn" 
            onClick={() => this.props.logout()
                .then(() => hashHistory.push('/login'))
            }>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </div>

        </div>
      );
    } else {
      return <div></div>;
    }
  }


}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()).then(hashHistory.push('/login')),
  readConversations: () => dispatch(readConversations()),
  allFriendRequests: () => (dispatch(allFriendRequests())),
  fetchAllConversations: () => dispatch(fetchAllConversations()),
  getAllNotifications: () => dispatch(getAllNotifications()),
});


export default connect(
  mapStateToProps, 
  mapDispatchToProps)(onClickOutside(RightNavbar));
