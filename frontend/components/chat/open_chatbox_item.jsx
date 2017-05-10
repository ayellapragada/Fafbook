import React from 'react';
import Messages from './messages.jsx';
import { Link } from 'react-router';

class OpenChatboxItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleCloseChat = this.handleCloseChat.bind(this);
  }

  handleCloseChat() {
    this.props.closeChat(this.props.chat);
  }

  render() {
    return (
      <div className="open-chatbox-item">
        <div className="chatbox-header" onClick={this.props.toggleOpen} >
          <div className="chatbox-header-name">
            <Link to={`/profile/${this.props.otherUser.id}`}>
            {`${this.props.otherUser.fname} ${this.props.otherUser.lname}`}
          </Link>
          </div>

          <div className="chatbox-header-controls">
            <i onClick={this.handleCloseChat} 
                className="fa fa-times" aria-hidden="true"></i>
          </div>

        </div>

        <Messages />

        <div>
          Send New Message
        </div>
      </div>
    );
  }
}

export default OpenChatboxItem;
