import {
  RECEIVE_ALL_FRIENDS, 
  REMOVE_FRIEND } from '../actions/friend_actions';
import merge from 'lodash/merge';

const _nullFriends = {}

const FriendsReducer = (state = _nullFriends, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.friends;
    case REMOVE_FRIEND: 
      const newState = merge({}, state);
      delete newState[action.friend["requester_id"]]
      return newState;
    default:
      return state;
  }
}

export default FriendsReducer;
