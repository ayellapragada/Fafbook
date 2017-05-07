import * as APIUtil from '../util/message_api_util';

export const RECEIVE_ALL_CONVERSATIONS = "RECEIVE_ALL_CONVERSATIONS";
export const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
export const DELETE_CONVERSATION = "DELETE_CONVERSATION";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";

export const receiveAllConversations = (conversations) => ({
  type: RECEIVE_ALL_CONVERSATIONS,
  conversations
});

export const addNewMessage = (conversation) => ({
  type: ADD_NEW_MESSAGE,
  conversation
});

export const receiveConversation = (conversation) => ({
  type: RECEIVE_CONVERSATION,
  conversation
});

export const deleteConversation = (conversation) => ({
  type: DELETE_CONVERSATION,
  conversation
});

export const fetchAllConversations = () => dispatch => (
  APIUtil.allConversations()
  .then(conversations => dispatch(receiveAllConversations(conversations)))
);

export const fetchConversation = (id) => dispatch => (
  APIUtil.getConversation(id)
  .then(conversation => dispatch(receiveConversation(conversation)))
);

export const addMessage = (receipients, body) => dispatch => (
  APIUtil.sendMessage(receipients, body)
  .then(conversation => dispatch(addNewMessage(conversation)))
);

export const removeConversation = (id) => dispatch => (
  APIUtil.deleteConversation(id)
  .then(conversation => dispatch(deleteConversation(conversation)))
);
