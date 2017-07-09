import React from 'react';
import { connect } from 'react-redux';
import { createComment, viewOnePost } from '../../actions/post_actions.js';
import Post from '../feed/post.jsx';

class SoloPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  componentDidMount() {
    this.props.viewOnePost(this.props.postId)
      .then(() => this.setState({loading: false}));
  }

  componentWillReceiveProps(nextProps){
    if (this.props.postId !== nextProps.postId) {
      this.props.viewOnePost(nextProps.postId);
    }
  }

  componentWillUnmount() {
    this.setState({loading: true});
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="profile loading-profile">
          <div className="loader">Loading...</div>
        </div>
      );
    }
    const posts = Object.values(this.props.posts).map(post => {
      return  <Post 
        post={post} 
        createComment={this.props.createComment}
        key={ post.post.id }/>;
    });

    return (
      <div className="solo-post">
        <div className="solo-post-container">
          {posts}
        </div>
      </div>
    );

  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  postId: ownProps.params.id,
  posts: state.posts.posts,
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  viewOnePost: (id) => dispatch(viewOnePost(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SoloPost);
