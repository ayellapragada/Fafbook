import React from 'react';
import Messages from './messages.jsx';
import { Link } from 'react-router';

class OpenChatboxItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ""};

    this.handleCloseChat = this.handleCloseChat.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  }

  handleCloseChat() {
    this.props.closeChat(this.props.chat);
  }

  handleChange(e) {
    this.setState({message: e.currentTarget.value});
  }

  checkSubmit(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      this.handleSubmit(e);
    } 
  }

  handleSubmit(e) {
    this.setState({message: ""});
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

        <div className="send-chat-message">
          <textarea 
            className="send-chat-textarea"
            value={this.state.message}
            placeholder="Type a message"
            onKeyDown={this.checkSubmit} 
            onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default OpenChatboxItem;
