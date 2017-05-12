export const allConversations = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/conversations'
  });
};

export const newConversation = (sender_id, recipient_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/conversations',
    data: {conversation: {sender_id, recipient_id}}
  });
};

export const readConversations = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/conversations/read',
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

export const sendMessages = (conversation_id, user_id, body) => {
  return $.ajax({
    method: 'POST',
    url: `/api/conversations/${conversation_id}/messages`,
    data: {message : { conversation_id, user_id, body }}
  });
};
