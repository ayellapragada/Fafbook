import React from 'react';
import Modal from 'react-modal';
import onClickOutside from 'react-onclickoutside';

class OpenPicture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  handleClickOutside(evt) {
    this.closeModal();
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
      <span className="picture-modal-container">
        <img onClick={this.openModal}
          className="profile-sidebar-photos"
          src={this.props.url}/>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Picture"
          className="picture-modal modal"
          overlayClassName="modal-overlay"
        >
          <img className="modal-picture-big"
            src={this.props.url}/>
        </Modal> 
      </span>

    );
  }

}

export default onClickOutside(OpenPicture);
