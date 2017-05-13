import React from 'react';
import { connect } from 'react-redux';
import { 
  getChatResults, 
  clearChatResults } from '../../actions/chat_actions.js';
import ChatDropdown from './chat_dropdown.jsx';

class NewConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.handleChange = this.handleChange.bind(this);
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
        <li>
          <ChatDropdown res={res} key={res.id} />
        </li>
      );
    });

    return (
      <div className="new-conversation">
        <div className="new-conversation-container">
          <textarea
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
  chatSearch: state.chatSearch
});

const mapDispatchToProps = dispatch => ({
  getChatResults: (query) => dispatch(getChatResults(query)),
  clearChatResults: () => dispatch(clearChatResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewConversation);
