import * as APIUtil from '../util/friendship_api_util';

export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

export const friendRequest = (currentUserId, requestedUserId) => dispatch => (
  APIUtil.friendRequest(currentUserId, requestedUserId)
);

export const approveRequest = (currentUserId, requesterUserId) => dispatch => (
  APIUtil.updateRequest(currentUserId, requesterUserId, 'approve')
    .then((friend) => dispatch(removeFriend(friend)))
);

export const denyRequest = (currentUserId, requesterUserId) => dispatch => (
  APIUtil.updateRequest(currentUserId, requesterUserId, 'deny')
    .then((friend) => dispatch(removeFriend(friend)))
);

export const deleteFriend = (currentUserId, requesterUserId) => dispatch => (
  APIUtil.deleteFriend(currentUserId, requesterUserId)
) ;

export const allFriendRequests = () => (dispatch) => (
  APIUtil.allFriendRequests()
    .then((friends) => dispatch(receiveAllFriends(friends)))
);

export const receiveAllFriends = friends => ({
  type: RECEIVE_ALL_FRIENDS,
  friends
});

export const removeFriend = friend => ({
  type: REMOVE_FRIEND,
  friend
});
