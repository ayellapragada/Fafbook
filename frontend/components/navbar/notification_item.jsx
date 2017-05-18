import React from 'react';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.notif.notifier;
    return (
      <li>
        <div className="notification-item">
          <Link to={`/profile/${user.id}`}>
            <div className="friend-request-info">
              <img src={user.profile_url} />
            </div>
          </Link>

          <div className="notification-content">
            <div className="notification-body">
              <span className="bold">
                {`${user.fname} ${user.lname}`}&nbsp;
              </span>
              {`${this.props.notif.key}!`}
            </div>
            <div>
              <TimeAgo date={this.props.notif.created_at}/>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default NotificationItem;
