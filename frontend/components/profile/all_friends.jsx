import React from 'react';
import { connect } from 'react-redux';
import { fetchUserFriends } from '../../actions/user_actions.js';


class AllFriends extends React.Component {
  componentDidMount() {
    this.props.fetchUserFriends(this.props.user.id);
  }

  render() {
    return (
      <div>
        Friends
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchUserFriends: (id) => dispatch(fetchUserFriends(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(AllFriends);
