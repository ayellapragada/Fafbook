import * as APIUtil from '../util/notification_api_util.js';

export const RECEIVE_NOTIFICATIONS = "RECEIVE_NOTIFICATIONS";

export const receiveNotifications = (notifications) => ({
  type: RECEIVE_NOTIFICATIONS,
  notifications
});

export const getAllNotifications = () => dispatch => (
  APIUtil.allNotifications()
  .then(notifications => dispatch(receiveNotifications(notifications)))
);

export const readNotifications = () => dispatch => (
  APIUtil.readNotifications()
  .then(notifications => dispatch(receiveNotifications(notifications)))
);

export const readNotification = (id) => dispatch => (
  APIUtil.readNotification(id)
  .then(notifications => dispatch(receiveNotifications(notifications)))
);
