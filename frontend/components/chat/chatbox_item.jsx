import React from 'react';
import { Link } from 'react-router';
import OpenChatboxItem from './open_chatbox_item.jsx';

class ChatboxItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleCloseChat = this.handleCloseChat.bind(this);
  }

  toggleOpen() {
    this.setState({open: !this.state.open});
  }

  handleCloseChat() {
    this.props.closeChat(this.props.chat);
  }

  render() {
    if (this.state.open) {
      return (
        <div 
          className="chatbox-item">
          <OpenChatboxItem
            chat={this.props.chat}
            closeChat={this.props.closeChat}
            toggleOpen={this.toggleOpen}
            otherUser={this.props.chat.otherUser} />
        </div>
      );
    } else {
      return (
        <div 
          onClick={this.toggleOpen}
          className="chatbox-item">

          <div className="chatbox-closed">
            {`${this.props.chat.otherUser.fname} 
              ${this.props.chat.otherUser.lname}`}

            <i 
              onClick={this.handleCloseChat} 
              className="fa fa-times" 
              aria-hidden="true">
            </i>

          </div>
        </div>
      );
    }

  }
}

export default ChatboxItem;
