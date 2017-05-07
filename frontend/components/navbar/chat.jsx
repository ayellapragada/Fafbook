import { fetchAllConversations, } from '../../actions/message_actions';
import React from 'react';
import { connect } from 'react-redux';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllConversations();
  }

  render() {
    return (
      <div className="friend-requests-container">
        <div className="chat-header">
          <p>Recent</p>
          <p className="new-message">New Message</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchAllConversations: () => dispatch(fetchAllConversations())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
