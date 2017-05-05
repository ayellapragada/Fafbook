import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {
  updatePost, deletePost } from '../../actions/post_actions.js';
import Comment from './comment';
import Dropdown from './dropdown';
import EditPost from './edit_post';

class Post extends React.Component {
  constructor(props) {
    super(props);
    const dateTime = new Date( Date.parse(this.props.post.post.created_at));

    this.state = {dateTime: dateTime,
      comment: "",
      comments: this.props.post.post.comments,
      editModal: false,
      dropdown: false};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleEditModal = this.handleEditModal.bind(this);
  }

  checkSubmit(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      this.handleSubmit(e);
    } 
  }

  componentWillReceiveProps(nextProps) {
    this.setState({comments: nextProps.post.post.comments});
  }

  handleChange(e) {
    this.setState({comment: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(
      {post_id: this.props.post.post.id ,
        comment: this.state.comment,
        user_id: this.props.currentUser.id});
    this.setState({comment: ""});
  }

  handleDropdown() {
    this.setState({dropdown: !this.state.dropdown});
  }

  handleEditModal() {
    this.setState({editModal: !this.state.editModal});
  }

  render(){
    const comments = this.state.comments.map((comment) => {
      return (
        <li key={comment.id}>
          <Comment 
            comment={comment}/>
        </li>
      );
    });

    let postHeaderRightBoth;
    if (this.props.post.author.id !== this.props.post.receiver.id) {
      let rId = this.props.post.receiver.id;
      postHeaderRightBoth = (
        <div className="post-header-receiver">
          <i className="fa fa-caret-right" aria-hidden="true"></i>
          <Link to={"/profile/" + rId}>
          {this.props.post.receiver.fname}
          &nbsp;{this.props.post.receiver.lname}
        </Link>
        </div>
      );
    }


    return (
      <div className="post-container">
        <div className="post-top">
          {this.state.editModal && 
              <EditPost 
                post={this.props.post}
                updatePost={this.props.updatePost}
                handleEditModal={this.handleEditModal}
              />}

            <div className="post-header">
              <div className="post-header-information">
                <div className="post-header-left">
                  <Link to={`/profile/${this.props.post.author.id}`}>
                    <img src={this.props.post.author.profile_url}/>
                  </Link>
                </div>
                <div className="post-header-right">
                  <div className="post-header-right-people">
                    <Link to={`/profile/${this.props.post.author.id}`}>
                      {`${this.props.post.author.fname} 
                  ${this.props.post.author.lname}`}
                </Link>
                  {postHeaderRightBoth}
              </div>
              <div className="post-header-date-time">
                {this.state.dateTime.toDateString()} at &nbsp;
                {this.state.dateTime.toLocaleTimeString()}
              </div>
            </div>
          </div>

          { this.props.post.author.id === this.props.currentUser.id &&  <div 
            className="edit-dropdown"
            onClick={this.handleDropdown}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            {this.state.dropdown && 
                <Dropdown 
                  type="post"
                  post={this.props.post}
                  handleDropdown={this.handleDropdown}
                  handleEditModal={this.handleEditModal}
                  deletePost={this.props.deletePost} />}
              </div>
          }

            </div>

            <div className="post-body">
              <p>{this.props.post.post.body}</p>
            </div>

            <div className="post-buttons">

              <div className="post-action-button">
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                Like
              </div>

              <div className="post-action-button">
                <i className="fa fa-comment" aria-hidden="true"></i>
                Comment
              </div>

              <div className="post-action-button">
                <i className="fa fa-share" aria-hidden="true"></i>
                Share
              </div>

              <div className="post-likes">
              </div>
            </div>
          </div>



          <div className="post-bottom">
            <div className="post-comments">
              <ul>
                {comments}
              </ul>
            </div>

            <div className="post-new-comment">
              <img src={this.props.currentUser.profile_url} />
              <form onSubmit={this.handleSubmit}>
                <textarea
                  id="write-a-comment"
                  value={this.state.comment}
                  placeholder="Write a comment..."
                  onKeyDown={this.checkSubmit} 
                  onChange={this.handleChange}/>
              </form>

            </div>
          </div>

        </div>
    );
  }

}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (id) => dispatch(deletePost(id)),
});


export default connect (mapStateToProps, mapDispatchToProps)(Post);
