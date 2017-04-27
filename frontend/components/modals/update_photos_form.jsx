import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';


class UploadPhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      cover: null,
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateFile(field) {


    return(e) => { 
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({[field]: file });
      };
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("user[profile_photo]", this.state.profileFile);
    formData.append("user[cover_photo]", this.state.coverFile);

    this.props.updateUser(this.props.user);
    this.setState({caption: "", imageFile: null, imageUrl: null});
    this.props.closeModal();
  }

  render() {
    return(
      <div className="upload-photo-form">
        <input type="file" onChange={this.updateCaption}/>
        <input type="file" onChange={this.updateFile}/>
        <button onClick={this.handleSubmit}>Change Photos!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId:  state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  updateUser: (userId, user, form) => dispatch(updateUser(userId, user, form))
});

export default connect(null, mapDispatchToProps)(UploadPhotoForm);

