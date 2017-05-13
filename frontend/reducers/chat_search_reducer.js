import { 
  RECEIVE_CHAT_RESULTS, 
  CLEAR_CHAT_RESULTS } from '../actions/chat_actions';
import merge from 'lodash/merge';

const _nullSearch = {};


const ChatSearchReducer = (state = _nullSearch, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHAT_RESULTS:
      return action.results;
    case CLEAR_CHAT_RESULTS:
      return _nullSearch;
    default:
      return state;
  }
};


export default ChatSearchReducer;
