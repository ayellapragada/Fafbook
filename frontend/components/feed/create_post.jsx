import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <p> This will eventually make a post</p>
    )
  }

}

const mapStateToProps = state => ({
  errors: state.posts.errors
})

const mapDispatchToProps = dispatch => ({
  createPost: () => dispatch(createPost(post))
})

export default connect( mapStateToProps, mapDispatchToProps)(CreatePost);

