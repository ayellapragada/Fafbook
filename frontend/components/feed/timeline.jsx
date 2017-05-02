import React from 'react';
import { connect } from 'react-redux';
import { 
  fetchNewPosts, 
  fetchMorePosts, 
  createComment } from '../../actions/post_actions';

import Post from './post';
import CreatePost from './create_post';


class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  componentDidMount() {
    this.props.fetchNewPosts()
      .then(() => this.setState({loading: false}));
  }

  componentWillUnmount() {
    this.setState({loading: true});
  }

  render() {
    const postsValues = Object.values(this.props.posts);
    const reversedPosts = postsValues.reverse();

    if (!this.props.currentUser) {
      return (
        null
      );
    }

    const posts = reversedPosts.map(post => {
      return  <Post 
        post={post} 
        createComment={this.props.createComment}
        currentUser={this.props.currentUser}
        key={ post.post.id }/>;
    });

    if (this.state.loading) {
      return (
        <div className="loader">Loading...</div>
      );
    } else {
      return (
        <div className="feed">
          <CreatePost text={"Whats on your mind?"} />

          <ul>
            {posts}
          </ul>

        </div>
      );
    }
  } 
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  posts: state.posts.posts,
  postList: state.posts.postList,
});

// Going to have to do that thing from the auth posts on others, 
// Submit / Update :: FetchnewPosts / fetchUserPosts

const mapDispatchToProps = dispatch => ({
  fetchNewPosts: () => dispatch(fetchNewPosts()),
  fetchMorePosts: () => dispatch(fetchMorePosts()),
  createComment: (comment) => dispatch(createComment(comment)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
