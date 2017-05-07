export const allConversations = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/conversations'
  });
};

export const newConversation = () => {
  return $.ajax({
    method: 'POST',
    url: '/api/conversations'
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

export const sendMessages = (id, message) => {
  return $.ajax({
    method: 'POST',
    url: `/api/conversations/${id}/messages`
  });
};
