import React from 'react';
import { connect } from 'react-redux';
import { 
  fetchNewPosts, 
  fetchUserPosts, 
  fetchMorePosts, 
  fetchMoreUserPosts } from '../../actions/post_actions';

import CreatePost from './create_post';


class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserPosts(this.props.user.id);
  }

  render() {
    return (
      <div className="feed">
        <CreatePost />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  fetchNewPosts: () => dispatch(fetchNewPosts()),
  fetchMorePosts: () => dispatch(fetchMorePosts()),
  fetchUserPosts: (id) => dispatch(fetchUserPosts(id)),
  fetchMoreUserPosts: (id) => dispatch(fetchMoreUserPosts(id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Feed);
