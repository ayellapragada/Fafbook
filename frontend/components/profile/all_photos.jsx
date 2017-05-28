import React from 'react';
import { connect } from 'react-redux';

import { fetchUserPhotos } from '../../actions/user_actions.js';
import OpenPicture from '../modals/open_picture';

class AllPhotos extends React.Component {
  componentDidMount() {
    this.props.fetchUserPhotos(this.props.user.id);
  }

  render() {

    const mappedPhotos = this.props.user.photos.map((photo) => (
      <OpenPicture key={photo.id} url={photo.url} />
    ));

    if (mappedPhotos.length === 0) {
      mappedPhotos.push("No photos for this user!");
    }

    return(
      <div>
        <div className="all-friends-header">
          <i className="fa fa-picture-o" aria-hidden="true"></i>
          Photos
        </div>
        <div className="all-friends-square">
          <ul className="all-photos-list">
            {mappedPhotos}
          </ul>
        </div>
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
