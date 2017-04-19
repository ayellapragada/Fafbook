import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Dropdown from 'react-dropdown';

const options = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December']

class SignupForm extends React.Component  {
  constructor(props){
    super(props);
    this.state= {fname: "", lname: "", email: "", password: "", 
                 month: "", date:"", year:"", gender: ""};
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.currentTarget.value})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  setGender(e) {
    this.setState({gender: e.target.value})
  }

  render() {
    return(
      <div className="signup-header-container">
        <form onSubmit={this.handleSubmit} className="signUp-form-box">
       <input
          type="text"
          value={this.state.fname}
          onChange={this.update('fname')}
          className='signup-input'
          placeholder="First name"/>

        <input
          type="text"
          value={this.state.lname}
          onChange={this.update('lname')}
          className='signup-input'
          placeholder="Last name"/>

        <input
          type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className='signup-input'
          placeholder="Email"/>

        <input
          type="password"
          value={this.state.password}
          onChange={this.update('password')}
          className='signup-input'
          placeholder="Password"/>
        <div className="signup-birthday">
          Birthday

          <input
            type="text"
            value={this.state.date}
            onChange={this.update("date")}
            className='signup-input'
            placeholder="Date"/>

          <input
            type="text"
            value={this.state.year}
            onChange={this.update("year")}
            className='signup-input'
            placeholder="Year"/>
        </div>
        
        <div className="signup-gender" onChange={event => this.setGender(event)}>
          <input type="radio" value="M" name="gender"/> Male
          <input type="radio" value="F" name="gender"/> Female
        </div>
      </form>
    </div>
    ) 
  }
}

export default SignupForm;
