import { updateUser } from '../../actions/user_actions';
import React from 'react';
import { connect } from 'react-redux';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h3> This is where editing would go </h3>
    )
  }
};

const mapStateToProps = (state) => {
  return ({
    user: state.user,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    updateUser: (user) => dispatch(updateUser(user)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm)
