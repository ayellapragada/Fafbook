import { updateUser } from '../../actions/user_actions';
import React from 'react';
import { connect } from 'react-redux';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return(
      <div className="edit-profile-form">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            className="edit-profile-input"
            onChange={this.handleChange('about')}
            value={this.props.user.about}/>
        </form>
      </div>
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
