import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import AboutSideBar from './about_side_bar';
import ControlBar from './control_bar';


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
    if (user.id){
      return (
        <div className="profile">
          < ControlBar />
          < AboutSideBar user={user} />

        </div>
      );
    }
    else {
      return <div>Loading</div>;
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
