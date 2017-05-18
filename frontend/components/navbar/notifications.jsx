import React from 'react';
import { connect } from 'react-redux';
import { getAllNotifications } from '../../actions/notification_actions.js';
import NotificationItem from './notification_item.jsx';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotifications();
  }

  render() {
    const notifications = Object.values(this.props.notifications).reverse();

    const formatNotif = notifications.map((notif) => {
      return <NotificationItem key={notif.id} notif={notif} />;
    });

    return (
      <div className="friend-requests-container" >
        <p> Notifications </p>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
