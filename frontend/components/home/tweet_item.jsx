import React from 'react';

class TweetItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="trending-tweet">
        <i className="fa fa-bolt" aria-hidden="true"></i>

        <a href={this.props.tweet.url}>{this.props.tweet.name}</a>
      </div>
    );
  }
}

export default TweetItem;
