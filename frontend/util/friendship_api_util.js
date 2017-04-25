export const friendRequest = (currentUserId, requestedUserId) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: {friendship : { currentUserId, requestedUserId }} 
  });
};

export const updateRequest = (currentUserId, requesterUserId, action) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/friendships/0',
    data: {friendship : {currentUserId, requesterUserId, action}} 
  });
};
