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

  render() {
    const user = this.props.user;
    if (user.id === -1) {
      return (
        <div className="profile">
          <ControlBar user={user} />
          <div> Not friends with this user </div>
        </div>
      );
    }
    if (user.id){
      return (
        <div className="profile">
          <ControlBar user={user} />
          <AboutSideBar user={user} />
          <Photos user={user} />
          <Friends user={user} />
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
