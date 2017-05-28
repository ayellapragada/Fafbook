import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getTrendingTweets } from '../../actions/tweet_actions.js';
import TweetItem from './tweet_item.jsx';

class Tweets extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Object.keys(this.props.tweets).length === 0) {
      this.props.getTrendingTweets();
    }
  }

  render() {
    const trendingTweets = Object.values(this.props.tweets)
      .slice(0, 10)
      .map(tweet => (
        <TweetItem tweet={tweet} key={tweet.name}/>
      ));

    return (
      <div className="trending-twitter">
        <div className="trending-header">
          <div>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            Trending

          </div>
        </div>
        <div className="trending-tweets">
          {trendingTweets}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state =>  ({
  tweets: state.tweets
});

const mapDispatchToProps = dispatch => ({
  getTrendingTweets: () => dispatch(getTrendingTweets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);
