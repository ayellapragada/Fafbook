import React from 'react';
import { connect } from 'react-redux';
import { fetchUserPhotos } from '../../actions/user_actions.js';

class AllPhotos extends React.Component {
  componentDidMount() {
    this.props.fetchUserPhotos(this.props.user.id);
  }

  render() {
    return (
      <div>
        Photos
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchUserPhotos: (id) => dispatch(fetchUserPhotos(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(AllPhotos);
