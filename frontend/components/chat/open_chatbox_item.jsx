import React from 'react';
import Messages from './messages.jsx';

class OpenChatboxItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="open-chatbox-item">
        <div
          className="chatbox-header"
          onClick={this.props.toggleOpen}>
          <div className="chatbox-header-name">
            {`${this.props.otherUser.fname} ${this.props.otherUser.lname}`}
          </div>

          <div className="chatbox-header-controls">
            close and minimize
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
