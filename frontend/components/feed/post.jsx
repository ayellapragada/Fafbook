import React from 'react';
import { Link } from 'react-router';

class Post extends React.Component {
  constructor(props) {
    super(props);
    const dateTime = new Date( Date.parse(this.props.post.post.created_at))
    this.state = {dateTime: dateTime,
      comment: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  }


  checkSubmit(e) {
    if (e.keyCode== 13 && e.shiftKey == false) {
      this.handleSubmit(e);
    } 
  };

  handleChange(e) {
    this.setState({comment: e.currentTarget.value})

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(
      {post_id: this.props.post.post.id ,
        comment: this.state.comment,
        user_id: this.props.currentUser.id});
    this.setState({comment: ""});
  }



  render(){
    return (
      <div className="post-container">
        <div className="post-top">

          <div className="post-header">
            <div className="post-header-left">
              <Link to={`/profile/${this.props.post.author.id}`}>
                <img src={this.props.post.author.profile_url}/>
              </Link>
            </div>
            <div className="post-header-right">
              <Link to={`/profile/${this.props.post.author.id}`}>
                {`${this.props.post.author.fname} ${this.props.post.author.lname}`}
              </Link>
              <div className="post-header-date-time">
                {this.state.dateTime.toDateString()} at &nbsp;
                {this.state.dateTime.toLocaleTimeString()}
              </div>
            </div>
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
          </div>

          <div className="post-new-comment">
            <img src={this.props.currentUser.profile_url} />
            <form onSubmit={this.handleSubmit}>
              <textarea
                value={this.state.comment}
                placeholder="Write a comment..."
                onKeyDown={this.checkSubmit} 
                onChange={this.handleChange}/>
            </form>

          </div>
        </div>

      </div>
    )
  }

}

export default Post;
