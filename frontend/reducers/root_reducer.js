import { combineReducers } from 'redux';
import {USER_LOGOUT} from '../actions/session_actions';

import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import FriendsReducer from './friends_reducer';
import PostsReducer from './posts_reducer';


const AppReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  friends: FriendsReducer,
  posts: PostsReducer,
})

const RootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined
  }

  return AppReducer(state, action);
}

export default RootReducer;
