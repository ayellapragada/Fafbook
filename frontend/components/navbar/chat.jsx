import { 
  fetchAllConversations, 
  createNewConversation,
  readConversations } from '../../actions/message_actions';

import { openChat } from '../../actions/chat_actions.js';
import React from 'react';
import { connect } from 'react-redux';
import ConversationItem from './conversation_item.jsx';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllConversations();
    this.props.readConversations();
  }

  render() {
    const unconvertedConversations = Object.values(this.props.conversations);
    const orderedConversations = unconvertedConversations.sort((a, b) =>  (
      b.order_by - a.order_by));

    const conversations = orderedConversations.map((conversation) => (
      <ConversationItem 
        key={conversation.id} 
        currentUser={this.props.currentUser}
        openChat={this.props.openChat}
        toggleChat={this.props.toggleChat}
        conversation={conversation} />
    ));

    return (
      <div className="chat-container">

        <div className="chat-header">
          <p className="no-bottom-border">Recent</p>
          <p className="new-message no-bottom-border">New Message</p>
        </div>

        <ul>
          {conversations}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  conversations: state.conversations
});

const mapDispatchToProps = dispatch => ({
  fetchAllConversations: () => dispatch(fetchAllConversations()),
  readConversations: () => dispatch(readConversations()),
  createNewConversation: (senderId, recipientId) => dispatch(
    createNewConversation(senderId, recipientId)),
  openChat: (chat) => dispatch(openChat(chat))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
