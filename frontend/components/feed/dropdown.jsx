import React from 'react';
import onClickOutside from 'react-onclickoutside';
import Modal from 'react-modal';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClickOutside(e) {
    this.props.handleDropdown();
  }

  handleDelete() {
    this.props.deletePost(this.props.post.post.id);
  }

  render() {
    return (
      <ul className="edit-delete-dropdown">
        <div className="edit-delete-dropdown-option"
             onClick={this.props.handleEditModal}
        >
          <li>{`Edit ${this.props.type}`}</li>
        </div>

        <div 
          onClick={this.handleDelete}
          className="edit-delete-dropdown-option">
          <li>{`Delete ${this.props.type}`}</li>
        </div>
      </ul>
    );
  }
}

export default onClickOutside(Dropdown);
