import React from 'react';
import { connect } from 'react-redux';
import { 
  fetchNewPosts, 
  fetchUserPosts, 
  fetchMorePosts, 
  fetchMoreUserPosts,
  createComment } from '../../actions/post_actions';

import Post from './post';
import CreatePost from './create_post';
import AboutSideBar from '../profile/about_side_bar';
import Photos from '../profile/photos';
import Friends from '../profile/friends';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, page: 0};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.user.id !== nextProps.user.id) {
      this.props.fetchUserPosts(nextProps.user.id);
    }
  }

  componentDidMount() {
    this.props.fetchUserPosts(this.props.user.id)
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
      this.props.fetchMoreUserPosts(this.props.user.id, this.state.page);
    } 
  }


  render() {
    const postsValues = Object.values(this.props.posts);
    const reversedPosts = postsValues.reverse();

    const posts = reversedPosts.map(post => {
      return  <Post 
        post={post} 
        createComment={this.props.createComment}
        key={ post.post.id }/>;
    });

    const user = this.props.user;

    return (
      <div className="profile-feed-fix">
        <div className="profile-sidebar-not-feed">
          <AboutSideBar user={user} />
          <Photos user={user} />
          <Friends user={user} />
        </div>
        <div className="feed">
          <CreatePost />

          <ul>
            {posts}
          </ul>

        </div>
      </div>
    );
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
  fetchMoreUserPosts: (id, page) => dispatch(fetchMoreUserPosts(id, page)),
  createComment: (comment) => dispatch(createComment(comment)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Feed);
