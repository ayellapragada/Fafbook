import React from 'react';
import { connect } from 'react-redux';
import { 
  getAllNotifications,
  readNotification,
  readNotifications } from '../../actions/notification_actions.js';
import NotificationItem from './notification_item.jsx';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.handleRead = this.handleRead.bind(this);
  }

  componentDidMount() {
    this.props.getAllNotifications();
  }

  handleRead() {
    this.props.readNotifications();
  }

  render() {
    const notifications = Object.values(this.props.notifications).reverse();

    const formatNotif = notifications.map((notif) => {
      return (
        <NotificationItem 
          key={notif.id} 
          notif={notif} 
          readNotification={this.props.readNotification}
        />
      );
    });

    return (
      <div className="chat-container" >
        <div className="chat-header">
          <p className="no-bottom-border">Notifications</p>
          <div className="controls">
            <p 
              className="new-message no-bottom-border"
              onClick={this.handleRead}>Mark As Read</p>
          </div>
        </div>
        <ul> { formatNotif } </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  notifications: state.notifications,
});

const mapDispatchToProps = dispatch => ({
  getAllNotifications: () => dispatch(getAllNotifications()),
  readNotifications: () => dispatch(readNotifications()),
  readNotification: (id) => dispatch(readNotification(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
