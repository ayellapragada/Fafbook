export const trendingTweets = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tweets',
  });
};
