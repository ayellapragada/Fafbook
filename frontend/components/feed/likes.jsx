import React from 'react';

class Likes extends React.Component {
  render() {
    return (
      <div>
        {this.props.likes.length} people like this.
      </div>
    );
  }
}

export default Likes;
