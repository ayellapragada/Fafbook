import React from 'react';
import { Link } from 'react-router';
import OpenChatboxItem from './open_chatbox_item.jsx';

class ChatboxItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({open: !this.state.open});
  }

  render() {
    if (this.state.open) {
      return (
        <div 
          className="chatbox-item">
          <OpenChatboxItem
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
          </div>
        </div>
      );
    }

  }
}

export default ChatboxItem;
