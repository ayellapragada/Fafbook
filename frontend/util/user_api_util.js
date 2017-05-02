export const getUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/' + id
  });
};

export const patchUser = (user, form) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/users/' + user.id,
    data: form,
    contentType: false,
    processData: false,
  });
};

export const patchProfile = (id, profile) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}/profile`,
    data: { profile }
  });
};

export const searchUsers = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/search/' + query
  });
};
