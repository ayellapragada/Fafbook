import * as APIUtil from '../util/user_api_util'

export const RECEIVE_VIEWED_USER = "RECEIVE_USER";

export const receiveViewedUer = viewedUser => ({
  type: RECEIVE_VIEWED_USER,
  viewedUser
})

export const viewUser = id => dispatch => (
  APIUtil.getUser(id)
    .then(user => dispatch(receiveViewedUser(user)))
)
