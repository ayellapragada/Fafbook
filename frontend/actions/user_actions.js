import * as APIUtil from '../util/user_api_util';

export const RECEIVE_VIEWED_USER = "RECEIVE_USER";

export const receiveViewedUser = viewedUser => ({
  type: RECEIVE_VIEWED_USER,
  user: viewedUser
});

export const viewUser = id => dispatch => (
  APIUtil.getUser(id)
    .then(user => dispatch(receiveViewedUser(user)))
);
