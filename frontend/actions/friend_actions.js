import * as APIUtil from '../util/friendship_api_util';

export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const RECEIVE_NEW_FRIEND = "RECEIVE_NEW_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

export const NONE = "NONE";

export const none = ({
  type: NONE,
});

export const friendRequest = (currentUserId, requestedUserId) => dispatch => (
  APIUtil.friendRequest(currentUserId, requestedUserId).then(dispatch(none))
)

export const approveRequest = (currentUserId, requesterUserId) => dispatch => (
  APIUtil.friendRequest(currentUserId, requestedUserId, 'approve').then(dispatch(none))
)

export const denyRequest = (currentUserId, requesterUserId) => dispatch => (
  APIUtil.friendRequest(currentUserId, requestedUserId, 'deny').then(dispatch(none))
)

export const deleteFriend = (currentUserId, requesterUserId) => dispatch => (
  APIUtil.deleteFriend(currentUserId, requesterUserId).then(dispatch(none))
) 
