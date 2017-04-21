export const getUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/' + id
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/users/' + user.id,
    data: user
  });
};

export const searchUsers = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/' + query
  })
}
