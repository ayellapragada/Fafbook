import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class LeftBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="inside-home-left-navbar">
          <div className="home-side-nav-user">
            <Link 
              to={`/profile/${this.props.currentUser.id}`}>
              <img src={this.props.currentUser.profile_url}/>
              {`${this.props.currentUser.fname}
                ${this.props.currentUser.lname}`}
            </Link>
          </div>

          <div className="left-navbar-main">
            <Link to="/" activeClassName="active">
              <i className="fa fa-newspaper-o" aria-hidden="true"></i>
              <p>News Feed</p>
            </Link>
            <Link to="/">
              <i className="fa fa-comments" aria-hidden="true"></i>
              <p>Messenger</p>
            </Link>


          </div>
        </div>
      );

    } else {
      return null;
    }

            // <div className="left-navbar-explore">
            //   <i className="fa fa-star" aria-hidden="true"></i>
            //   <p>Explore</p>!
            // </div>

  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps, null)(LeftBar);
