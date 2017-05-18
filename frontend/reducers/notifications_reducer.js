import { 
  RECEIVE_NOTIFICATIONS } from '../actions/notification_actions.js';
import merge from 'lodash/merge';

const _nullNotifications = {};

const NotificationsReducer = (state = _nullNotifications, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTIFICATIONS: 
      return merge({}, action.notifications);
    default:
      return state;
  }
};

export default NotificationsReducer;
