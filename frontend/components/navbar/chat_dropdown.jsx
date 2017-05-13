import React from 'react';

class ChatDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.createNewConversation(
      this.props.currentUser.id, 
      this.props.res.id)
      .then((chat) => {
        let id = Object.keys(chat.conversation)[0];
        let conversation = Object.values(chat.conversation)[0];
        let otherUser = this.props.res;
        this.props.openChat({[id]: {conversation, otherUser} });
      })
      .then(() => this.props.toggleChat());
  }

  render() {
    return (
      <div 
        className="chat-dropdown-item"
        onClick={this.handleClick}>
        <img src={this.props.res.profile_url}/>
        {`${this.props.res.fname} ${this.props.res.lname}`}
      </div>
    );
  }
}

export default ChatDropdown;
