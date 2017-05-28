import React from 'react';
import { connect } from 'react-redux';
import { getTrendingTweets } from '../../actions/tweet_actions.js';

class Tweets extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTrendingTweets();
  }

  render() {
    return (
      <div className="trending-twitter">
        Tweets.
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
