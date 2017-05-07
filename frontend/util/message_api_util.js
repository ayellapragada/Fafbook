export const allConversations = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/messages'
  });
};

export const sendMessage = (receipients, body) => {
  return $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: { message: {receipients, body} }
  });
};

export const getConversation = (id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/messages/' + id,
  });
};

export const deleteConversation = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/messages/' + id,
  });
};
