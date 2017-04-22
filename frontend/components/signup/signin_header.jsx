import React from 'react';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import {Link, hashHistory} from 'react-router';

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
    if (this.props.errors instanceof(Array)) {
      const errors = this.props.errors.map((error, i)=>{
        return <li className="signin-error" key={`error-${i}`}>{error}</li>
      })
      return (
        <ul>
          {errors}
        </ul>
      )
    }
  }
  
  render() {
    return (
      <div className="signin-header-container">
        <form onSubmit={this.handleSubmit} className="signin-header-box">
          <div className="fafbook-logo">
            <Link to="/" className="fafbook-logo">fafbook</Link>
          </div>
          <div className="signin-form">
            <label className="signin-email signin-label">Email
              <br/>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signin-input"/>
              <br/>
            </label>
            <label className="signin-password signin-label">Password
              <br/>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="signin-input"/>
              <p id="forgot-password"> Forgot account? </p>
            </label>
            <input className="signin-submit" type="submit" value=
              {this.props.errors[0] != "Invalid email/password combination" ? "Log In" : "Invalid Login!"}/>
            <button className="test-button-login" 
              onClick={() => this.props.login({
                email: 'test@password.com',
                password: 'password'
              })}>Demo </button>
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
  login: user => dispatch(login(user)).then(() => hashHistory.push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninHeader);
