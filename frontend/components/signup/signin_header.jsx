import React from 'react';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';

class SigninHeader extends React.Component {
  constructor (props){
    super(props);
    this.state = {email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value}
    )};
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  renderErrors(){
    const errors = this.props.errors.map((error, i)=>{
      return <li className="signin-error" key={`error-${i}`}>{error}</li>
    })
    return (
      <ul>
        {errors}
      </ul>
  )}

  render() {
    return (
      <div className="signin-header-container">
        <form onSubmit={this.handleSubmit} className="signin-header-box">
          <div className="fafbook-logo">fafbook</div>
          <div className="signin-form">
            <label className="signin-email">Email
              <br/>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signin-input"/>
            </label>
            <label className="signin-password">Password
              <br/>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="signin-input"/>
              <p id="forgot-password"> Forgot account? </p>
            </label>
            <input className="signin-submit" type="submit" value="Log In"/>
          {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.session.errors
  }
}
const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninHeader);
