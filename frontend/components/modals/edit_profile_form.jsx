import { updateProfile } from '../../actions/user_actions';
import React from 'react';
import { connect } from 'react-redux';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {about: props.user.about,
      location: props.user.location,
      work: props.user.work,
      education: props.user.education,
      relationship: props.user.relationship,
      language: props.user.language
     }
  }

  handleSubmit(e) {
    e.preventDefault();
    const updatedProfile = this.state
    const id = this.props.user.id
    this.props.updateProfile(id, updatedProfile)
  }

  handleChange(field) {
    return (e) =>  (this.setState({[field]: e.currentTarget.value}))
  }

  render() {
    return(
      <div className="edit-profile-form-container">
        <form onSubmit={this.handleSubmit}>

          <label>
            <i className="fa fa-globe" aria-hidden="true"></i>
            About
            <textarea 
              type="text"
              className="edit-profile-input"
              onChange={this.handleChange('about')}
              value={this.state.about}/> 
          </label>

          <label>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            Location
            <input 
              type="text"
              className="edit-profile-input"
              onChange={this.handleChange('location')}
              value={this.state.location}/> 
          </label>

          <label>
            <i className="fa fa-briefcase" aria-hidden="true"></i>
            Work
            <input 
              type="text"
              className="edit-profile-input"
              onChange={this.handleChange('work')}
              value={this.state.work}/> 
          </label>

          <label>
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            Education
            <input 
              type="text"
              className="edit-profile-input"
              onChange={this.handleChange('education')}
              value={this.state.education}/> 
          </label>

          <label>
            <i className="fa fa-heart" aria-hidden="true"></i>
            Relationship
            <input 
              type="text"
              className="edit-profile-input"
              onChange={this.handleChange('relationship')}
              value={this.state.relationship}/> 
          </label>

          <label>
            <i className="fa fa-language" aria-hidden="true"></i>
            Language
            <input 
              type="text"
              className="edit-profile-input"
              onChange={this.handleChange('language')}
              value={this.state.language}/> 
          </label>

          <input
            type="submit"
            className="edit-profile-input-save"
            value="Save" />
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
    updateProfile: (id, profile) => dispatch(updateProfile(id, profile)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
