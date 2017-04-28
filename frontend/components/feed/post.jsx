import React from 'react';
import { Link } from 'react-router';

class Post extends React.Component {
  constructor(props) {
    super(props);
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
            </div>
          </div>

          <div className="post-body">
          </div>

        </div>

        <div className="post-buttons">
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
