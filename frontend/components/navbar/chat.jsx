import { 
  fetchAllConversations, 
  createNewConversation,
  readConversations } from '../../actions/message_actions';

import { openChat } from '../../actions/chat_actions.js';
import React from 'react';
import { connect } from 'react-redux';
import ConversationItem from './conversation_item.jsx';
import NewConversation from './new_conversation.jsx';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newMessage: false};
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.handleRead = this.handleRead.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllConversations();
  }

  handleRead() {
    this.props.readConversations()
      .then(() => this.props.fetchAllConversations());
  }

  handleNewMessage() {
    this.setState({newMessage: !this.state.newMessage});
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
          <div className="controls">
            <p 
              className="new-message no-bottom-border"
              onClick={this.handleRead}>Mark As Read</p>
            <p 
              onClick={this.handleNewMessage}
              className="new-message no-bottom-border">New Message</p>
          </div>
        </div>
        {this.state.newMessage && <NewConversation 
          toggleChat={this.props.toggleChat} />}
        <ul className="conversations-container">
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
