import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {updateComment, deleteComment} from '../../actions/post_actions';
import TimeAgo from 'react-timeago';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    return(
      <div className="comment-outer-container">
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
        {this.props.comment.user_id === this.props.currentUser.id && 
            <div 
              onClick={this.handleDelete}
              className="comment-crud">
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Comment);
