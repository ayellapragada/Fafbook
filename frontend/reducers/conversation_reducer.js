import { 
  RECEIVE_ALL_CONVERSATIONS,
  RECEIVE_NEW_MESSAGE,
  DELETE_CONVERSATION
} from '../actions/message_actions.js';
import merge from 'lodash/merge';

const _nullConversations = {};

const ConversationReducer = (state= _nullConversations, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_CONVERSATIONS:
      return merge({}, action.conversations);
    case RECEIVE_NEW_MESSAGE:
      return merge({}, action.conversation);
    case DELETE_CONVERSATION:
      const newState = merge({}, state);
      delete newState[action.conversation.id];
      return newState;
    default:
      return state;
  }
};

export default ConversationReducer;
