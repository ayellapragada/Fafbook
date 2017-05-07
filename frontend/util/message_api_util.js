export const allConversations = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/conversations'
  });
};

export const newConversation = (senderId, recipientId) => {
  return $.ajax({
    method: 'POST',
    url: '/api/conversations',
    data: {conversation: {senderId, recipientId}}
  });
};

export const removeConversation = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/conversations' + id,
  });
};

export const allMessages = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/conversations/${id}/messages`
  });
};

export const sendMessages = (conversationId, userId, body) => {
  return $.ajax({
    method: 'POST',
    url: `/api/conversations/${conversationId}/messages`,
    data: {message : { conversationId, userId, body }}
  });
};
