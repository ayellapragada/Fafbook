import React from 'react';
import { connect } from 'react-redux';
import MessageItem from './message_item.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  updateScroll(){
    const element = document.getElementsByClassName("chatbox-messages")[0];
    element.scrollTop = element.scrollHeight;
  }

  componentDidMount() {
    this.updateScroll();
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateScroll();
  }

  render() {
    let messages;
    if (this.props.messages) {
      messages = this.props.messages.map((msg) => {
        return  (
          <MessageItem 
            message={msg} 
            currentUser={this.props.currentUser}
            otherUser={this.props.chat.otherUser}
            key={msg.id} />
        );
      });
    }

    return (
      <div className="chatbox-messages">
        <ul>{messages}</ul>
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
