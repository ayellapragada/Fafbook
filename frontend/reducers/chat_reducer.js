import { 
  CLOSE_ALL_CHATS, 
  CLOSE_CHAT, 
  OPEN_CHAT } from '../actions/chat_actions';
import merge from 'lodash/merge';

const _nullChats = [];

const ChatReducer = (state = _nullChats, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLOSE_ALL_CHATS:
      return _nullChats;
    case OPEN_CHAT:
      return merge([], state, [action.chat]);
    case CLOSE_CHAT:
      const newState = merge([], state);
      delete newState[action.chat.id];
      return newState;
    default:
      return state;
  }
};

export default ChatReducer;
