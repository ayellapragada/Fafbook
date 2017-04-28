import { RECEIVE_ALL_POSTS, RECEIVE_POST,
  REMOVE_POST, ADD_NEW_POSTS, RECEIVE_POST_ERRORS } from '../actions/post_actions';
import merge from 'lodash/merge';


const _nullPosts = Object.freeze({
  posts: {},
  postList: [],
  errors: []
});

const PostsReducer = (state = _nullPosts, action) => {
  Object.freeze(state);
  var list;

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      list = Object.keys(action.posts)
      return merge({}, _nullPosts, { posts: action.posts, postList: list })
    case RECEIVE_POST:
      list = state.postList.concat(Object.keys(action.post))
      return merge({}, state, { posts: action.post, postList: list, errors: [] })
    case REMOVE_POST:
      const newState = merge({}, state)
      debugger // Never actually finished htis since it won't be helpful for a while.
      return state;
    case ADD_NEW_POSTS:
      // Used later for infinite scroll.
      list = state.postList.concat(Object.keys(action.post))
      return merge({}, state, { posts: action.posts, postList: list, errors: [] })
    case RECEIVE_POST_ERRORS:
      return Object.assign({}, state, {errors: action.errors}); 
    default:
      return state;
  }
};

export default PostsReducer;
