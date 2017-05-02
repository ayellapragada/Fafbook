import React from 'react';
import {Link} from 'react-router';


class Comment extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="comment-container">
        <img src={this.props.comment.profileurl}/>
        <div className="comment-content">
          <p>
            <Link to={`/profile/${this.props.comment.user_id}`}>
              {this.props.comment.fname} {this.props.comment.lname}</Link> 
            &nbsp;
            {this.props.comment.body}
          </p>

          <p className="post-header-date-time">
          {new Date(Date.parse(this.props.comment.created_at)).toDateString()}
        </p>
        </div>
      </div>
    );
  }
}


export default Comment;
