import { RECEIVE_VIEWED_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  viewedUser: null
});


const UserReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VIEWED_USER:
      return action.user;
    default:
      return state;
  }
};


export default UserReducer;
