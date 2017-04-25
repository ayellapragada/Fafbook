import * as APIUtil from '../util/friendship_api_util';

export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const RECEIVE_NEW_FRIEND = "RECEIVE_NEW_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

export const friendRequest = (currentUserId, requestedUserId) => dispatch => (
  APIUtil.friendRequest(currentUserId, requestedUserId)
)

export const approveRequest = (currentUserId, requesterUserId) => dispatch => (
  APIUtil.friendRequest(currentUserId, requestedUserId, 'approve')
)

export const denyRequest = (currentUserId, requesterUserId) => dispatch => (
  APIUtil.friendRequest(currentUserId, requestedUserId, 'deny')
)

export const deleteFriend = (currentUserId, requesterUserId) => dispatch => (
  APIUtil.deleteFriend(currentUserId, requesterUserId)
) 

export const allFriendRequests = () => (dispatch) => (
  APIUtil.allFriendRequests()
)
