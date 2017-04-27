import React from 'react';
import { connect } from 'react-redux';
import CreatePost from './create_post';


class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div className="feed">
        <CreatePost />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
});



export default connect(mapStateToProps, mapDispatchToProps)(Feed);
