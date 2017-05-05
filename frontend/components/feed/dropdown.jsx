import React from 'react';
import onClickOutside from 'react-onclickoutside';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickOutside(e) {
    this.props.handleDropdown();
  }

  render() {
    return (
      <ul className="edit-delete-dropdown">
        <div className="edit-delete-dropdown-option">
          <li>{`Edit ${this.props.type}`}</li>
        </div>
        <div className="edit-delete-dropdown-option">
          <li>{`Delete ${this.props.type}`}</li>
        </div>
      </ul>
    );
  }
}

export default onClickOutside(Dropdown);
