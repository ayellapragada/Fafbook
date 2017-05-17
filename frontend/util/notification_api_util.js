export const allNotifications = () => {
  return $.ajax({
    method: 'GET',
    url: `api/notifications`
  });
};
