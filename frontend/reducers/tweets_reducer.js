import { GET_TRENDING_TWEETS } from '../actions/tweet_actions.js';
import merge from 'lodash/merge';

const _nullTweets = {};


const TweetsReducer = (state = _nullTweets, action) => {
  Object.freeze(state);

  switch(action.type) {
    case GET_TRENDING_TWEETS:
      return action.tweets;
    default:
      return state;
  }
};

export default TweetsReducer;
