import * as APIUtil from '../util/post_api_util';
import * as CommentsUtil from '../util/comment_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const ADD_NEW_POSTS = "ADD_NEW_POSTS";
export const RECEIVE_POST_ERRORS ="RECEIVE_POST_ERRORS";
export const REPLACE_POST = "REPLACE_POST";

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const addNewPosts = (posts) => ({
  type: ADD_NEW_POSTS,
  posts
});

export const replacePost = post => ({
  type: REPLACE_POST,
  post
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = post => ({
  type: REMOVE_POST,
  post
});

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
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
  .then(post => dispatch(receivePost(post)), 
    err => dispatch(receivePostErrors(err.responseJSON)))
);

export const fetchPost = id => dispatch => (
  APIUtil.getPost(id)
  .then(post => dispatch(receivePost(post)))
);

export const updatePost =  post => dispatch => (
  APIUtil.updatePost(post)
  .then(post => dispatch(receivePost(post)),
    err => dispatch(receivePostErrors(err.responseJSON)))
);

export const deletePost = post => dispatch => (
  APIUtil.updatePost(post)
  .then(post => dispatch(removePost(post)))
);

export const createComment = comment => dispatch => (
  CommentsUtil.postComment(comment)
  .then(post => dispatch(replacePost(post)))
);

export const updateComment = comment => dispatch => (
  CommentsUtil.changeComment(comment)
  .then(post => dispatch(replacePost(post)))
);

export const deleteComment = id => dispatch => (
  CommentsUtil.postComment(comment)
  .then(post => dispatch(replacePost(post)))
);
