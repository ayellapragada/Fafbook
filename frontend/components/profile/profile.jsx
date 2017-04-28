import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { fetchUser, receiveViewedUser } from '../../actions/user_actions';
import ControlBar from './control_bar';
import AboutSideBar from './about_side_bar';
import Photos from './photos';
import Friends from './friends';
import Feed from '../feed/feed';



class Profile extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
    this.forceUpdate();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.props.fetchUser(nextProps.userId);
    }
  }

  render() {
    const user = this.props.user;

    if (user.status === -2) {
      return (
        <div className="profile">
          <ControlBar user={user} />
          <div className="do-you-know-box">
            Do you know {user.fname}?
          </div>
          <div className="do-you-know-box-content">
            To see what {user.gender ? "he" : "she"} shares,
            send {user.gender ? "him" : "her"} a friend request.
          </div>
        </div>
      );
    }

    else if (user.status === -1) {
      return (
        <div className="profile">
          <ControlBar user={user} />
          <div className="do-you-know-box">
            Do you know {user.fname}?
          </div>
          <div className="do-you-know-box-content">
            Request sent.
          </div>
        </div>
      );
    }

    else if (user.id > 0){
      return (
        <div className="profile">
          <DocumentTitle title={`${user.fname} ${user.lname}`} />
          <div className="profile-header">
            <ControlBar user={user} />
          </div>

          <div className="profile-body">
            <div className="profile-sidebar-not-feed">
              <AboutSideBar user={user} />
              <Photos user={user} />
              <Friends user={user} />
            </div>

            <div className="profile-feed">
              <Feed />
            </div>
          </div>
        </div>
      );
    }

    else {
      return (
        <div className="loader">Loading...</div>
      )
    }
  }
}
const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  userId: ownProps.params.id,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  clearUser: () => dispatch(receiveViewedUser(null))
});


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
