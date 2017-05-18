import React from 'react';
import { connect } from 'react-redux';
import { getAllNotifications } from '../../actions/notification_actions.js';
import Pusher from 'pusher-js';

class Unopened extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.pusher = new Pusher('7e8e957ce7d0485a1034');
    this.chatRoom = this.pusher.subscribe('notifications');
  }

  componentDidMount() {
    const currentUser = this.props.currentUser;

    this.chatRoom.bind('new_notification', 
      (data) => {
        // if (data.recipient_ids.includes(currentUser.id)) {
          this.props.getAllNotifications();
        // }
      });

  }

  render() {
    let unopened = 0;

    const unconvertedNotifications = Object.values(this.props.notifications);
    unconvertedNotifications.forEach((notif) => {
      if (notif.unopened) { unopened ++;}
    });

    if (unopened) {
      return (
        <div className="notification">
          {unopened}
        </div>
      );
    } else {
      return <div />;
    }
  }

}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  notifications: state.notifications,
});

const mapDispatchToProps = dispatch => ({
  getAllNotifications: () => dispatch(getAllNotifications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Unopened);
