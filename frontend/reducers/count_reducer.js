import {UNRESPONDED, UNREAD, UNOPENED} from '../actions/count_actions.js';
import merge from 'lodash/merge';

const _nullCount = {unresponded: 0, unread: 0, unopened: 0};

const CountReducer = (state = _nullCount, action) => {
  Object.freeze(state);

  switch(action.type) {
    case UNRESPONDED:
      return merge({}, state, {unresponded: action.count} );
    case UNREAD:
      return merge({}, state, {unread: action.count} );
    case UNOPENED:
      return merge({}, state, {unopened: action.count} );
    default:
      return state;

  }
};

export default CountReducer;
