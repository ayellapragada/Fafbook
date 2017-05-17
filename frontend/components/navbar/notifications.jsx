import React from 'react';
import { connect } from 'react-redux';
import { getAllNotifications } from '../../actions/notification_actions.js';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotifications();
  }

  render() {
    return (
      <div className="friend-requests-container" >
        <p> Notifications </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  getAllNotifications: () => dispatch(getAllNotifications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
