import React from 'react';
import { connect } from 'react-redux';
import MessageItem from './message_item.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  updateScroll(){
    this.messagesEnd.scrollIntoView({behavior: "smooth"});
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
        <div style={ {float:"left", clear: "both"}  }
          ref={(el) => { this.messagesEnd = el;  }}>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    messages: state.conversations[ownProps.chat.conversation.id].messages 
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
