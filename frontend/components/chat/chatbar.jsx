import React from 'react';
import { connect } from 'react-redux';
import { closeChat, closeAllChats } from '../../actions/chat_actions.js';
import { getMessages, sendMessage } from '../../actions/message_actions.js';

class Chatbar extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="chatbar">
        CHATBAR BABY WOO
      </div>
    );
  }

}

export default Chatbar;
