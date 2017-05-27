import React from 'react';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleReadOne = this.handleReadOne.bind(this);
  }

  handleReadOne() {
    this.props.readNotification(this.props.notif.id);
  }

  render() {
    const user = this.props.notif.notifier;
    let notifUnopened = this.props.notif.unopened ?  "msg-unread" : "msg-read";

    let bodyMessage;
    switch(this.props.notif.notifiable_type) {
      case "Comment":
        bodyMessage = "commented on a post.";
        break;
      case "Post":
        bodyMessage = "wrote a post on your wall.";
        break;
      case "Socialization::ActiveRecordStores::Like":
        bodyMessage = "liked a post.";
        break;
    }

    return (
      <Link className="no-line-notif" to={`/posts/${this.props.notif.key}`}>
        <li className={notifUnopened}>
          <div className={"notification-item"}>
            <div className="friend-request-info">
              <img src={user.profile_url} />
            </div>

            <div className="notification-content" onClick={this.handleReadOne}>
              <div className="notification-body">
                <span className="bold">
                  {`${user.fname} ${user.lname}`}&nbsp;
                </span>
                {bodyMessage}
              </div>
              <div className="conversation-content-time">
                <TimeAgo date={this.props.notif.created_at}/>
              </div>
            </div>
          </div>
        </li>
      </Link>
    );
  }
}

export default NotificationItem;
