export const allNotifications = () => {
  return $.ajax({
    method: 'GET',
    url: `api/notifications`
  });
};

export const readNotification = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/notifications/read/${id}`,
  });
};

export const readNotifications = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notifications/read',
  });
};
