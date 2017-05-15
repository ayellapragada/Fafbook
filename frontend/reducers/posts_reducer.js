import { 
  RECEIVE_ALL_POSTS, RECEIVE_POST,
  REMOVE_POST, ADD_NEW_POSTS, RECEIVE_POST_ERRORS,
  REPLACE_POST
} from '../actions/post_actions';

import merge from 'lodash/merge';


const _nullPosts = Object.freeze({
  posts: {},
  errors: []
});

const PostsReducer = (state = _nullPosts, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, _nullPosts, { posts: action.posts});
    case RECEIVE_POST:
      return merge({}, state, { posts: action.post});
    case REPLACE_POST:
      return merge({}, state, {posts: action.post});
    case REMOVE_POST:
      const newState = merge({}, state);
      delete newState.posts[action.post.id];
      return newState;
    case ADD_NEW_POSTS:
      return merge({}, state, { posts: action.posts});
    case RECEIVE_POST_ERRORS:
      return Object.assign({}, state, {errors: action.errors}); 
    default:
      return state;
  }
};

export default PostsReducer;
