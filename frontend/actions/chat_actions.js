import { searchUsers } from '../util/user_api_util';

export const CLOSE_ALL_CHATS = "CLOSE_ALL_CHATS";
export const CLOSE_CHAT = "CLOSE_CHAT";
export const OPEN_CHAT = "OPEN_CHAT";
export const RECEIVE_CHAT_RESULTS = "RECEIVE_CHAT_RESULTS";
export const CLEAR_CHAT_RESULTS = "CLEAR_CHAT_RESULTS";

export const closeAllChats = () => ({
  type: CLOSE_ALL_CHATS
});

export const closeChat = (chat) => ({
  type: CLOSE_CHAT,
  chat
});

export const openChat = (chat) => ({
  type: OPEN_CHAT,
  chat
});

export const receiveChatResults = results => ({
  type: RECEIVE_CHAT_RESULTS,
  results
});

export const clearChatResults = () => ({
  type: CLEAR_CHAT_RESULTS
});

export const getChatResults = (query) => dispatch => (
  searchUsers(query).then(results => dispatch(receiveChatResults(results)))
);

