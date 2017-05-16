export const allNotifications = (id) => {
  return $.ajax({
    method: 'GET',
    url: `users/${id}/notifications/open_all`
  });
};
