import { allNotifications } from '../util/notification_api_util.js';

export const RECEIVE_NOTIFICATIONS = "RECEIVE_NOTIFICATIONS";

export const receiveNotifications = (notifications) => ({
  type: RECEIVE_NOTIFICATIONS,
  notifications
});

export const getAllNotifications = (id) => dispatch => (
  allNotifications(id)
  .then(notifications => dispatch(receiveNotifications(notifications)))
);
