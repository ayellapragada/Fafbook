export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/session',
    data:{ user } 
  });
};

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: '/session'
  });
};

export const updateCurrentUser = () => {
  return $.ajax({
    method: 'GET',
    url: '/session'
  });
};
