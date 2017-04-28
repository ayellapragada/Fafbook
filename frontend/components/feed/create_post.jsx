import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {input: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
  }

  handleSubmit(e){
    e.preventDefault();
  }

  handleClick(e){
  }

  render() {
    debugger
    return (
      <div className="create-post">

        <div className="create-post-header-container">
          <div className="create-post-header">
            <i className="fa fa-pencil" aria-hidden="true"></i>
            Create Post!
          </div>
        </div>

        <div className="create-post-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="create-post-form-input">
              <img src={this.props.currentUser.profile_url}/>
              <textarea
                value={this.state.input}
                placeholder="What's on your mind?"
                onClick={this.handleClick}
                onChange={this.handleChange} />
            </div>
            <div className="create-post-form-submit">
            </div>
          </form>
        </div>

      </div>
    )
  }

}

const mapStateToProps = state => ({
  errors: state.posts.errors,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  createPost: () => dispatch(createPost(post))
})

export default connect( mapStateToProps, mapDispatchToProps)(CreatePost);

