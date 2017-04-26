import React from 'react';
import Modal from 'react-modal';

class UploadPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    debugger
    return (
      <div className="upload-photo-modal-container">
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Upload Photo Modal"
          className="upload-photo-modal"
          overlayClassName="modal-overlay"
        >
          <h2 ref={subtitle => this.subtitle=subtitle}>Don't know why</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am your photo upload modal</div>
        </Modal> 
      </div>

    );
  }

}


export default UploadPhoto;


