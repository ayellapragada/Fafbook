import React from 'react';
import { connect } from 'react-redux';
import { 
  getChatResults, 
  clearChatResults,
  openChat} from '../../actions/chat_actions.js';
import { createNewConversation } from '../../actions/message_actions.js';
import ChatDropdown from './chat_dropdown.jsx';

class NewConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.props.getChatResults(this.state.query);
    }
  }

  componentWillUnmount() {
    this.props.clearChatResults();
  }

  handleChange(e){
    this.setState({ query: e.currentTarget.value });
  }

  render() {
    const dropdowns = Object.values(this.props.chatSearch).map((res) => {
      return (
        <li key={res.id}>
          <ChatDropdown 
            openChat={this.props.openChat}
            currentUser={this.props.currentUser}
            toggleChat={this.props.toggleChat}
            createNewConversation={this.props.createNewConversation}
            res={res} />
        </li>
      );
    });

    return (
      <div className="new-conversation">
        <div className="new-conversation-container">
          <textarea
            ref={(input) => {this.input = input;}}
            value={this.state.query}
            placeholder="Search a user!"
            onChange={this.handleChange}/>
        </div>
        <ul>{dropdowns}</ul>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  chatSearch: state.chatSearch,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getChatResults: (query) => dispatch(getChatResults(query)),
  createNewConversation: (senderId, recipientId) => dispatch(
    createNewConversation(senderId, recipientId)),
  openChat: (chat) => dispatch(openChat(chat)),
  clearChatResults: () => dispatch(clearChatResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewConversation);
