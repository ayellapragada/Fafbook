import React from 'react';
import { connect } from 'react-redux';
import { uploadPhoto } from '../../actions/user_actions';


class UploadPhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      imageFile: null,
      imageUrl: null
    };

    this.updateCaption = this.updateCaption.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateCaption(e) {
    this.setState({caption: e.target.value});
  }

  updateFile(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file,
        imageUrl: fileReader.result});
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("photo[caption]", this.state.caption)
    formData.append("photo[picture]", this.state.imageFile)
    this.props.uploadPhoto(formData)
    this.setState({caption: "", imageFile: null, imageUrl: null})
  }

  render() {
    return(
      <div className="upload-photo-form">
        <input type="text" onChange={this.updateCaption}/>
        <input type="file" onChange={this.updateFile}/>
        <button onClick={this.handleSubmit}>Upload Photo!</button>
        <img className="upload-photo-preview" src={this.state.imageUrl}/>
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  uploadPhoto: (photo) => dispatch(uploadPhoto(photo))
})

export default connect(null, mapDispatchToProps)(UploadPhotoForm);
