import React from 'react';
import { connect } from 'react-redux';

class UnrespondedRequests extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const friends = Object.values(this.props.friends).length;

    if (friends) {
      return (
        <div className="notification">
          {friends}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  friends: state.friends
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(UnrespondedRequests);
