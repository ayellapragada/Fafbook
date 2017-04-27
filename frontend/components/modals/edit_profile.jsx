import React from 'react';
import Modal from 'react-modal';
import EditProfileForm from './edit_profile_form';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div className="edit-profile-modal-container">
        <button onClick={this.openModal}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
          Edit Profile</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Edit Profile"
          className="edit-profile-modal modal"
          overlayClassName="modal-overlay"
        >
          <button 
            className="modal-close" 
            onClick={this.closeModal} >
            close </button>
          <EditProfileForm />

        </Modal> 
      </div>
    );
  }
}

export default EditProfile;
