import * as APIUtil from '../util/user_api_util';

export const RECEIVE_VIEWED_USER = "RECEIVE_VIEWED_USER";

export const receiveViewedUser = user => ({
  type: RECEIVE_VIEWED_USER,
  user
});

export const fetchUser = id => dispatch => (
  APIUtil.getUser(id)
    .then(user => dispatch(receiveViewedUser(user)))
);
