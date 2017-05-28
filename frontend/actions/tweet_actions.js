import * as APIUtil from '../util/tweets_api_util.js';

export const GET_TRENDING_TWEETS = "GET_TRENDING_TWEETS";

export const receiveTrendingTweets = tweets => ({
  type: GET_TRENDING_TWEETS,
  tweets
});

export const getTrendingTweets = () => dispatch => (
  APIUtil.trendingTweets()
  .then(tweets => {
    dispatch(receiveTrendingTweets(tweets));
  })
);
