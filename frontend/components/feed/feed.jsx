import React from 'react';
import { connect } from 'react-redux';
import { 
  fetchNewPosts, 
  fetchUserPosts, 
  fetchMorePosts, 
  fetchMoreUserPosts } from '../../actions/post_actions';

import Post from './post';
import CreatePost from './create_post';


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  componentWillReceiveProps(nextProps){
    if (this.props.user.id != nextProps.user.id) {
      this.props.fetchUserPosts(nextProps.user.id);
    }
  }

  componentDidMount() {
    this.props.fetchUserPosts(this.props.user.id)
      .then(() => this.setState({loading: false}))
  }

  componentWillUnmount() {
    this.setState({loading: true})
  }

  render() {
    const postsValues = Object.values(this.props.posts);
    const reversedPosts = postsValues.reverse();

    const posts = reversedPosts.map(post => {
      return  <Post post={post} key={ post.post.id }/>
    })

    return (
      <div className="feed">
        <CreatePost />

        <ul>
          {posts}
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  posts: state.posts.posts,
  postList: state.posts.postList,
});

// Going to have to do that thing from the auth posts on others, 
// Submit / Update :: FetchnewPosts / fetchUserPosts

const mapDispatchToProps = dispatch => ({
  fetchNewPosts: () => dispatch(fetchNewPosts()),
  fetchMorePosts: () => dispatch(fetchMorePosts()),
  fetchUserPosts: (id) => dispatch(fetchUserPosts(id)),
  fetchMoreUserPosts: (id) => dispatch(fetchMoreUserPosts(id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Feed);
