import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {updateComment, deleteComment} from '../../actions/post_actions';
import TimeAgo from 'react-timeago';


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
              {this.props.comment.fname} {this.props.comment.lname}
            </Link> 

            &nbsp;
            {this.props.comment.body}

          </p>

          <p className="post-header-date-time">
            <TimeAgo date={this.props.comment.created_at}/>
          </p>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id))
});


export default Comment;
