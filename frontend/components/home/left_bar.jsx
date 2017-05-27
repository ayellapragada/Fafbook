import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById('chat-dropdown').click();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="inside-home-left-navbar">
          <div className="left-bar-placeholder"></div>
          <div className="home-side-nav-user">
            <Link 
              to={`/profile/${this.props.currentUser.id}`}>
              <img src={this.props.currentUser.profile_url}/>
              {`${this.props.currentUser.fname} ${this.props.currentUser.lname}`}
            </Link>
          </div>

          <div className="left-navbar-main">
            <Link to="/" activeClassName="active">
              <i className="fa fa-newspaper-o" aria-hidden="true"></i>
              <p>News Feed</p>
            </Link>
            <Link to="/" onClick={this.handleClick}>
              <i className="fa fa-comments" aria-hidden="true"></i>
              <p>Messenger</p>
            </Link>

            <div className="left-navbar-explore">
              <p>MY OTHER LINKS</p>
            </div>

            <a className="front-website"
              href="http://www.akshithyellapragada.com">
              <i className="fa fa-user" aria-hidden="true"></i>
              <p>Website</p>
            </a>
            <a className="front-github" href="https://github.com/ayellapragada">
              <i className="fa fa-github" aria-hidden="true"></i>
              <p>Github</p>
            </a>
            <a 
              className="front-linkedin"
              href="https://www.linkedin.com/in/akshith-yellapragada/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <p>LinkedIn</p>
            </a>
            <a 
              className="front-angellist" 
              href="https://angel.co/akshith-yellapragada">
              <i className="fa fa-angellist" aria-hidden="true"></i>
              <p>AngelList</p>
            </a>
            <a 
              className="front-tetris" 
              href="https://www.akshithyellapragada.com/TetrisParty/">
              <i className="fa fa-trophy" aria-hidden="true"></i>
              <p>Tetris</p>
            </a>
            <a 
              className="front-easysave" 
              href="https://github.com/ayellapragada/EasySave">
              <i className="fa fa-database" aria-hidden="true"></i>
              <p>Easy Save</p>
            </a>
          </div>
        </div>
      );

    } else {
      return null;
    }


  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps, null)(LeftBar);
