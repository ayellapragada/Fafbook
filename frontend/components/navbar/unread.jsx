import { fetchAllConversations, } from '../../actions/message_actions';
import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

class Unread extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const unconvertedConversations = Object.values(this.props.conversations);
    let unreadCount = 0;
    const currentUser = this.props.currentUser;
    const conversations = unconvertedConversations.map((conversation) => {
      if (conversation.message.user_id !== currentUser.id && 
        !conversation.message.read) {
        unreadCount += 1;
      }
    });

    if (unreadCount) {
      return (
        <div className="notification">
          <DocumentTitle 
            title={`${document.title.split(' (')[0]} (${unreadCount})`} />
          {unreadCount}
        </div>
      );
    } else {
      return <div />;
    }
  }

}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  conversations: state.conversations
});

const mapDispatchToProps = dispatch => ({
  fetchAllConversations: () => dispatch(fetchAllConversations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Unread);
