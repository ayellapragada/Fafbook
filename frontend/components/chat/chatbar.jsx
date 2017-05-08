import React from 'react';
import { connect } from 'react-redux';
import { closeChat, closeAllChats } from '../../actions/chat_actions.js';
import { getMessages, sendMessage } from '../../actions/message_actions.js';
import ChatboxItem from './chatbox_item';

class Chatbar extends React.Component {
  constructor() {
    super();
  }


  render() {
    const chatBoxes = this.props.chats.map((chat) => {
      return (
        <li key={chat.conversation.id}>
          <ChatboxItem 
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
          <ul>
            {chatBoxes}
          </ul>
        </div>

        { this.props.chats.length > 0 && 
            <div className="close-chats">
              <div 
                onClick={this.props.closeAllChats}>
                <i className="fa fa-times-circle" aria-hidden="true"></i>
              </div>
            </div>
        } 
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
