import React from 'react';
import { connect } from 'react-redux';
import { 
  fetchNewPosts, 
  fetchMorePosts, 
  createComment } from '../../actions/post_actions';
import { receiveViewedUser } from '../../actions/user_actions';
import DocumentTitle from 'react-document-title';

import Post from './post';
import CreatePost from './create_post';


class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, page: 0};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.receiveViewedUser(this.props.currentUser.id);
    this.props.fetchNewPosts()
      .then(() => this.setState({loading: false}));
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.setState({loading: true});
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    if (document.body.scrollHeight ===
      document.body.scrollTop +        
      window.innerHeight) {
      this.setState({page: this.state.page + 1});
      this.props.fetchMorePosts(this.state.page);
    } 
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
        <div className="profile loading-profile">
          <div className="loader">Loading...</div>
        </div>
      );
    } else {
      return (
        <div className="feed" >
          <DocumentTitle title="Fafbook" />
          <CreatePost text={"Write your post here"} />

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

const mapDispatchToProps = dispatch => ({
  fetchNewPosts: () => dispatch(fetchNewPosts()),
  fetchMorePosts: (page) => dispatch(fetchMorePosts(page)),
  createComment: (comment) => dispatch(createComment(comment)),
  receiveViewedUser: (id) => dispatch(receiveViewedUser(id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
