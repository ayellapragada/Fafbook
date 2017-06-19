import React from 'react';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import {Link, hashHistory} from 'react-router';

class SigninHeader extends React.Component {
  constructor (props){
    super(props);
    this.state = {email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleGuestTwo = this.handleGuestTwo.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value}
      );};
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  handleGuest(e) {
    const user = {email:"test@password.com",
      password: "password"};
    this.props.login(user);
  }

  handleGuestTwo(e) {
    const user = {email:"test1@password.com",
      password: "password"};
    this.props.login(user);
  }

  renderErrors(){
    if (this.props.errors instanceof(Array)) {
      const errors = this.props.errors.map((error, i)=>{
        return <li className="signin-error" key={`error-${i}`}>{error}</li>;
      });
      return (
        <ul>
          {errors}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="signin-header-container">
        <div className="signin-header-box">
          <div className="fafbook-logo">
            <Link to="/" className="fafbook-logo">fafbook</Link>
          </div>
          <div className="signin-form">
            <form className="signin-real-form" onSubmit={this.handleSubmit}>
              <label className="signin-email signin-label">
                Email
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="signin-input"
                />
              </label>
              <label className="signin-password signin-label">
                Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signin-input"
                />
              </label>
              <button className="signin-submit signin-submit-button"
                type="submit">{this.props.errors[0] !== 
                    "Invalid email/password combination" ?
                    "Log In" : "Invalid!"}
                  </button>
                </form>
                <button className="test-button-login"
                  onClick={this.handleGuest}>
                  Demo 1
                </button>
                <button className="test-button-login"
                  onClick={this.handleGuestTwo}>
                  Demo 2
                </button>
              </div>
            </div>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.session.errors
  };
};
const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)).then(() => hashHistory.push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninHeader);
