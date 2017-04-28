import React from 'react';
import { Link } from 'react-router';

class Post extends React.Component {
  constructor(props) {
    super(props);
    const dateTime = new Date( Date.parse(this.props.post.post.created_at))
    this.state = {dateTime}
    
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

          </div>
        </div>


        <div className="post-likes">
        </div>

        <div className="post-comments">
        </div>

        <div className="post-new-comment">
        </div>

      </div>
    )
  }

}

export default Post;
