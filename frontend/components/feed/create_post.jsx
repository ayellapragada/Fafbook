import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';


class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    const message = this.setMessage(
      this.props.currentUser.id, 
      this.props.user.id, 
      this.props.user.fname);


    this.state = {body: "",
      author_id: this.props.currentUser.id,
      receiver_id: this.props.user.id,
      placeHolder: message}


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setState = this.setState.bind(this);
    this.setMessage = this.setMessage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const currentUserId = this.props.currentUser.id;
    const nextUserId = nextProps.user.id;
    const name = nextProps.user.fname;

    this.setState(

      {
        placeHolder: this.setMessage(currentUserId, nextUserId, name),
        receiver_id: nextUserId 
      }
    )
  }

  setMessage(userId, otherUserId, name) {
    if (!otherUserId){
      return "What's on your mind?"
    }
    return userId == otherUserId ?
      "What's on your mind?" : `Write something to ${name}...`   
  }

  handleChange(e) {
    this.setState({body: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const post = this.state;
    this.props.createPost(post)
      .then(() => this.setState({body: "" }));
  }

  handleClick(e){
  }

  render() {
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

            <div 
              className={"create-post-form-input " + 
                  ((this.props.errors.length > 0 ) ? "errors" : "")}>
                  <img src={this.props.currentUser.profile_url}/>
                  <textarea
                    value={this.state.body}
                    placeholder={this.state.placeHolder}

                    onClick={this.handleClick}
                    onChange={this.handleChange} />
                </div>

                <div className="create-post-form-submit">
                  <button type="submit">Post</button>

                </div>
              </form>
            </div>

          </div>
    )
  }

}

const mapStateToProps = state => ({
  errors: state.posts.errors,
  currentUser: state.session.currentUser,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post))
})

export default connect( mapStateToProps, mapDispatchToProps)(CreatePost);

