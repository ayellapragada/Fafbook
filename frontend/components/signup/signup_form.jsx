import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import {hashHistory} from 'react-router';

const options = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 
  'Jun', 'Jul', 'Aug', 'Sep', 
  'Oct', 'Nov', 'Dec']

class SignupForm extends React.Component  {
  constructor(props){
    super(props);
    this.state= {fname: "", lname: "", email: "", password: "", 
                 month: "", date:"", year:"", gender: false}
    
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
    this.props.signup(user);
  }

  setGender(e) {
    this.setState({gender: e.target.value})
  }

  render() {
    const months = options.map((month, i) => {
      return <option key={i} value={month}>{month}</option>
    });
    const allDays = [...Array(32).keys()]
    allDays.splice(0,1);

    const allYears = [];
    for (let i = 2017; i >= 1905; i--) {
       allYears.push(i)
    }
    const years = allYears.map(y => <option key={y} value={y}>{y}</option>)
    const days = allDays.map(d => <option key={d} value={d}>{d}</option>)

    days.unshift(<option key='d' value='d'>Day</option> );
    months.unshift(<option key='m' value='m'>Month</option> );
    years.unshift(<option key='y' value='y'>Year</option> );

    return(
      <div className="signup-header-container">
        <div className="signup-lefthand-words">
          <h3 className="big-booty">
            Connect with friends and the world around you on fafbook.
          </h3>
          <ul className="signup-lefthand-list">
            <li className="signup-lefthand-list-item">
              <span className="bold-words">
              See photos and updates</span>from friends in News Feed.</li>
            <li className="signup-lefthand-list-item">
              <span className="bold-words">
              Share what's new</span> in your life on your Timeline</li>
            <li className="signup-lefthand-list-item">
              <span className="bold-words">
              Find more</span> of what you're looking for with fafbook Search</li>
          </ul>
        </div>
        <form onSubmit={this.handleSubmit} className="signUp-form-box">
       <input
          type="text"
          value={this.state.fname}
          onChange={this.update('fname')}
          className='signup-input signup-fname'
          placeholder="First name"/>

        <input
          type="text"
          value={this.state.lname}
          onChange={this.update('lname')}
          className='signup-input signup-lname'
          placeholder="Last name"/>
        <br/>
        <input
          type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className='signup-input signup-email'
          placeholder="Email"/>
        <br/>
        <input
          type="password"
          value={this.state.password}
          onChange={this.update('password')}
          className='signup-input signup-password'
          placeholder="New password"/>
        <div className="signup-birthday">

          Birthday
          <div className="signup-birthday">
            <select
              value={this.state.month}
              onChange={this.update('month')}
            >
              {months}
            </select>
            <select
              value={this.state.date}
              onChange={this.update('date')}
            >
              {days}
            </select>
            <select
              value={this.state.year}
              onChange={this.update('year')}
            >
              {years}
            </select>
          </div>
        </div>
        
        <div className="signup-gender" onChange={event => this.setGender(event)}>
          <input className="signup-gender-choice" type="radio" value={false} name="gender"/> Female
          <input className="signup-gender-choice" type="radio" value={true} name="gender"/> Male
        </div>
        <input type="submit" onSubmit={this.handleSubmit} value="Create Account"/>
      </form>
    </div>
    ) 
  }
}

const mapStateToProps = state => ({
  errors: state.session.errors
})

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)).then(() => hashHistory.push('/'))
})

export default connect( mapStateToProps, mapDispatchToProps)(SignupForm);
