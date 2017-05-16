import React from 'react';
import { connect } from 'react-redux';
import { getAllNotifications } from '../../actions/notification_actions.js';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotifications(this.props.currentUser.id);
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
  getAllNotifications: (id) => dispatch(getAllNotifications(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
