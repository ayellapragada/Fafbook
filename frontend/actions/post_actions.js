import * as APIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const ADD_NEW_POSTS = "ADD_NEW_POSTS";

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const addNewPosts = (posts) => ({
  type: ADD_NEW_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST.
  post
});

export const removePost = post => ({
  type: REMOVE_POST,
  post
});

export const fetchNewPosts = () => dispatch => (
  APIUtil.allPosts()
  .then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchUserPosts = (id) => dispatch => (
  APIUtil.getFeed(id)
  .then(posts => dispatch(receiveAllPosts(posts)))
)

export const fetchMorePosts = () => dispatch => (
  APIUtil.allPosts()
  .then(posts => dispatch(addNewPosts(posts)))
);

export const fetchMoreUserPosts = (id) => dispatch => (
  APIUtil.getFeed(id)
  .then(posts => dispatch(addNewPosts(posts)))
)

export const createPost = post => dispatch => (
  APIUtil.createPost(post)
  .then(post => dispatch(receivePost(post)))
);

export const fetchPost = id => dispatch => (
  APIUtil.getPost(id)
  .then(post => dispatch(receivePost(post)))
);

export const updatePost =  post => dispatch => (
  APIUtil.updatePost(post)
  .then(post => dispatch(receivePost(post)))
);

export const deletePost = post => dispatch => (
  APIUtil.updatePost(post)
  .then(post => dispatch(removePost(post)))
);
