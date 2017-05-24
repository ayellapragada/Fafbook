import { 
  fetchAllConversations, 
  getMessages } from '../../actions/message_actions';
import { countAction } from '../../actions/count_actions.js';
import React from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';

class Unread extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.pusher = new Pusher('7e8e957ce7d0485a1034');
    this.chatRoom = this.pusher.subscribe('messages');
  }

  componentWillUnmount() {
    this.chatRoom.unbind();
    this.pusher.unsubscribe(this.chatRoom);
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

    this.props.countAction(unreadCount, 'UNREAD');

    if (unreadCount) {
      return (
        <div className="notification">
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
  countAction: (count, type) => dispatch(countAction(count, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Unread);
