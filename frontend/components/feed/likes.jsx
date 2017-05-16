import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {display: false};
  }

  handleClick() {
    this.setState({display: !this.state.display});
    // To display all users who liked this post. Iffy on how much I care about
    // this.
  }

  render() {
    if (this.props.likes.length === 1) {
      let user = this.props.likes[0];
      return (
        <div>
          <span className="fa-icon-circle">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          </span>
          {`${user.fname} ${user.lname}`} 
        </div>
      );
    } else if (this.props.likes.length === 2) {
      let user1 = this.props.likes[0];
      let user2 = this.props.likes[1];
      return (
        <div>
          <span className="fa-icon-circle">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          </span>
          {`${user1.fname} ${user1.lname}`} and&nbsp;
          {`${user2.fname} ${user2.lname}`} 
        </div>
      );
    } else if (this.props.likes.length === 3) {
      let user1 = this.props.likes[0];
      let user2 = this.props.likes[1];
      let user3 = this.props.likes[2];
      return (
        <div>
          <span className="fa-icon-circle">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          </span>
          {`${user1.fname} ${user1.lname}`},&nbsp;
          {`${user2.fname} ${user2.lname}`} and&nbsp;
          {`${user3.fname} ${user3.lname}`}
        </div>
      );
    } else if (this.props.likes.length === 4) {
      let user1 = this.props.likes[0];
      let user2 = this.props.likes[1];
      let user3 = this.props.likes[2];
      let user4 = this.props.likes[3];
      return (
        <div>
          <span className="fa-icon-circle">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          </span>
          {`${user1.fname} ${user1.lname}`},&nbsp;
          {`${user2.fname} ${user2.lname}`},&nbsp;
          {`${user3.fname} ${user3.lname}`} and&nbsp;
          {`${user4.fname} ${user4.lname}`}
        </div>
      );
    } else if (this.props.likes.length > 4) {
      let user1 = this.props.likes[0];
      let user2 = this.props.likes[1];
      return (
        <div>
          <span className="fa-icon-circle">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          </span>
          {`${user1.fname} ${user1.lname}`},&nbsp;
          {`${user2.fname} ${user2.lname}`} and&nbsp;
          {this.props.likes.length - 2} other people like this.
        </div>
      );
    } else {
      return ( <div /> );
    }
  }
}

export default Likes;
