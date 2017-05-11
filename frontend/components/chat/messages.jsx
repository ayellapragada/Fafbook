import React from 'react';
import { connect } from 'react-redux';
import MessageItem from './message_item.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    let messages = 0;
    if (this.props.messages) {
      messages = this.props.messages.length;
    }
    return (
      <div className="chatbox-messages">
        <div>{messages}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    messages: state.conversations[ownProps.chat.conversation.id].messages 
  });
};

export default connect(mapStateToProps, null)(Messages);
