import React from 'react';

class ChatDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chat-dropdown-item">
        <img src={this.props.res.profile_url}/>
        {`${this.props.res.fname} ${this.props.res.lname}`}
      </div>
    );
  }
}

export default ChatDropdown;
