import React from 'react';
import { connect } from 'react-redux';
import MessageItem from './message_item.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    let messages;
    if (this.props.messages) {
      messages = this.props.messages.map((msg) => {
        return  (
          <MessageItem 
            message={msg} 
            key={msg.id} />
        )
      });
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
