import { RECEIVE_ALL_POSTS, RECEIVE_POST, 
  REMOVE_POST, ADD_NEW_POSTS } from '../actions/post_actions';
import merge from 'lodash/merge';


const _nullPosts = Object.freeze({
  posts:null,
  postList: []
});

const PostsReducer = (state = _nullPosts, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return state;
    case RECEIVE_POST:
      return state;
    case REMOVE_POST:
      return state;
    case ADD_NEW_POSTS:
      return state;
    default:
      return state;
  }
};

export default PostsReducer;

