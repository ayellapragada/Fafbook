import React from 'react';
import Modal from 'react-modal';
import UpdatePhotosForm from './update_photos_form';

class UpdatePhotos extends React.Component {
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
      <div className={this.props.buttonClass}>
        <button onClick={this.openModal}>
          <i className="fa fa-camera-retro always-visible" aria-hidden="true"></i>
          <span className="hide">{this.props.text}</span></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Upload Photo Modal"
          className="upload-photo-modal"
          overlayClassName="modal-overlay"
        >
          <button 
            className="modal-close" 
            onSubmit={this.closeModal}
            onClick={this.closeModal}>
            close </button>
          <UpdatePhotosForm 
            closeModal={this.closeModal} />
        </Modal> 
      </div>

    );
  }

}

export default UpdatePhotos;
