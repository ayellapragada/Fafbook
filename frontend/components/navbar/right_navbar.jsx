import React from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import FriendRequests from './friend_requests';
import onClickOutside from 'react-onclickoutside';


class RightNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({requests: false});
    this.toggle = this.toggle.bind(this);
  }

  toggle(field) { 
    const opposite = !this.state[field]; 
    this.setState({[field]: opposite });
  }

  handleClickOutside (evt) {
    // Can be used to handle all, messages and notifications later.
    this.setState({requests: false});
  }

  render() {
    if (this.props.currentUser){
      return (
        <div className="right-navbar">
          <img src={this.props.currentUser.profile_url}
            className="navbar-profile-photo"/>
          <Link className="navbar-btn profile-link right-navbar-words"
            to={"/profile/" + this.props.currentUser.id}>
            {this.props.currentUser.fname}
          </Link>
          <div className="empty-border"></div>
          <Link className="navbar-btn home-link right-navbar-words"
            to={"/"}>
            Home
          </Link>
          <div
            onClick={() => this.toggle('requests')}
            className="navbar-btn">
            <i className="fa fa-users" aria-hidden="true"></i>
          </div>
          <div className="friend-requests-dropdown">
            { this.state.requests && <FriendRequests/> }
          </div>
          <div
            className="navbar-btn">
            <i className="fa fa-comments" aria-hidden="true"></i>
          </div>
          <div
            className="navbar-btn">
            <i className="fa fa-globe" aria-hidden="true"></i>
          </div>
          <div className="empty-border"></div>
          <div className="navbar-btn help-btn">
            <i className="fa fa-question-circle" aria-hidden="true"></i>
          </div>
          <div className="navbar-btn logout-btn" 
            onClick={() => this.props.logout()
                .then(hashHistory.push('/login'))
                .then(() => hashHistory.push('/login'))
            }>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }


}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()).then(hashHistory.push('/login'))
});


export default connect(
  mapStateToProps, 
  mapDispatchToProps)(onClickOutside(RightNavbar));
