import { allNotifications } from '../util/notification_api_util.js';

export const RECEIVE_NOTIFICATIONS = "RECEIVE_NOTIFICATIONS";

export const receiveNotifications = (notifications) => ({
  type: RECEIVE_NOTIFICATIONS,
  notifications
});

export const getAllNotifications = () => dispatch => (
  allNotifications()
  .then(notifications => dispatch(receiveNotifications(notifications)))
);
