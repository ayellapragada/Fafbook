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

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return state;
    case RECEIVE_POST:
      return Object.assign({}, state, {posts: action.post, errors: []});
    case REMOVE_POST:
      return state;
    case ADD_NEW_POSTS:
      return state;
    case RECEIVE_POST_ERRORS:
      return Object.assign({}, state, {errors: action.errors}); 
    default:
      return state;
  }
};

export default PostsReducer;
