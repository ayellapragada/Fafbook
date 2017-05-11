import React from 'react';
import { connect } from 'react-redux';
import { closeChat, closeAllChats } from '../../actions/chat_actions.js';
import { getMessages, sendMessage } from '../../actions/message_actions.js';
import ChatboxItem from './chatbox_item';
import Pusher from 'pusher-js';

class Chatbar extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.pusher = new Pusher('7e8e957ce7d0485a1034');
    this.chatRoom = this.pusher.subscribe('messages');
  }

  componentDidMount() {
    this.chatRoom.bind('new_message', 
      (data) => this.props.getMessages(data.id));
  }

  render() {

    const chatBoxes = Object.values(this.props.chats).map((chat) => {
      return (
        <li key={chat.conversation.id}>
          <ChatboxItem 
            currentUser={this.props.currentUser}
            getMessages={this.props.getMessages}
            sendMessage={this.props.sendMessage}
            currentUser={this.props.currentUser}
            closeChat={this.props.closeChat}
            chat={chat} />
        </li>
      );
    });

    return (
      <div className="chatbar">
        <div className="chat-boxes">
          <ul className="chat-boxes-ul">
            {chatBoxes}
            <div className="chat-main">
              Chat
            </div>
          </ul>
        </div>


      </div>
    );
  }

}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  chats: state.chats
});

const mapDispatchToProps = dispatch => ({
  closeChat: (chat) => dispatch(closeChat(chat)),
  closeAllChats: () => dispatch(closeAllChats()),
  getMessages: (id) => dispatch(getMessages(id)),
  sendMessage: (conversationId, userId, body) => dispatch(
    sendMessage(conversationId, userId, body))

});


export default connect (mapStateToProps, mapDispatchToProps)(Chatbar);
