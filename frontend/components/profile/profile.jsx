import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import ControlBar from './control_bar';
import AboutSideBar from './about_side_bar';
import Photos from './photos';
import Friends from './friends';



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

    if (user.id === -1) {
      return (
        <div className="profile">
          <ControlBar user={user} status={-1} />
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

    else if (user.id === -2) {
      return (
        <div className="profile">
          <ControlBar user={user} status={-2} />
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
          <div className="profile-header">
            <ControlBar user={user} />
          </div>
          <div className="profile-body">
            <AboutSideBar user={user} />
            <Photos user={user} />
            <Friends user={user} />
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="profile">Loading
        </div>
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
  fetchUser: (id) => dispatch(fetchUser(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
