import { 
  fetchAllConversations, 
  getMessages } from '../../actions/message_actions';
import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import Pusher from 'pusher-js';

class Unread extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.pusher = new Pusher('7e8e957ce7d0485a1034');
    this.chatRoom = this.pusher.subscribe('messages');
  }

  componentDidMount() {
    const currentUser = this.props.currentUser;
    this.chatRoom.bind('new_message', 
      (data) => {
        if (data.recipient_id === currentUser.id) {
          this.props.getMessages(data.id);
        }
      });
  }

  render() {
    const unconvertedConversations = Object.values(this.props.conversations);
    let unreadCount = 0;
    const currentUser = this.props.currentUser;
    const conversations = unconvertedConversations.map((conversation) => {
      if (conversation.message.user_id !== currentUser.id && 
        !conversation.message.read) {
        unreadCount += 1;
      }
    });

    if (unreadCount) {
      return (
        <div className="notification">
          <DocumentTitle 
            title={`${document.title.split(' (')[0]} (${unreadCount})`} />
          {unreadCount}
        </div>
      );
    } else {
      return <div />;
    }
  }

}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  conversations: state.conversations
});

const mapDispatchToProps = dispatch => ({
  fetchAllConversations: () => dispatch(fetchAllConversations()),
  getMessages: (id) => dispatch(getMessages(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Unread);
