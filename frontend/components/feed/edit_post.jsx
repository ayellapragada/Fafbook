import React from 'react';

class EditPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.post.post;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit() {
    const post = {id: this.state.id, body: this.state.body};
    this.props.updatePost(post).then(() => this.props.handleEditModal());
  }

  render() {
    return(
      <div className="create-post-form-container edit-post-container">
        <div 
          className="create-post-form-input edit-post-header">
          <img src={this.props.post.author.profile_url}/>
          <textarea
            value={this.state.body}
            placeholder={this.props.post.post.body}
            onChange={this.handleChange} />
        </div>

        <div className="update-post-buttons">
          <div className="create-post-form-submit">
            <button onClick={this.handleSubmit}>Update</button>
            <div className="cancel-edit-button">
              <button 
                onClick={this.props.handleEditModal}>
                Cancel</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default EditPost;
