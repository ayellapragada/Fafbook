import React from 'react';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';

class ConversationItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.otherUser = this.props.currentUser.id === 
      this.props.conversation.sender.id ?
      this.props.conversation.recipient : this.props.conversation.sender;
  }

  handleClick() {
    this.props.openChat(this.props.conversation, this.otherUser);
    this.props.toggleChat();
  }

  render() {

    return (
      <li onClick={this.handleClick}>
        <div className="conversation-item">

          <div className="conversation-circle-picture">
            <img src={this.otherUser.profile_url} />
          </div>

          <div className="conversation-content-center">

            <div className="conversation-content">
              <div className="conversation-content-header">

                <div className="conversation-content-name">
                  {`${this.otherUser.fname} ${this.otherUser.lname}`}
                </div>

                <div className="conversation-content-time">
                  <TimeAgo date={this.props.conversation.time}/>
                </div>

              </div>

              <div className="conversation-content-message">
                { this.props.conversation.message.body }
              </div>
            </div>
          </div>

        </div>
      </li>
    );
  }
}


export default ConversationItem;

