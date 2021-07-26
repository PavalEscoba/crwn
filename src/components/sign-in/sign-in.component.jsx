import React from 'react'

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({email:'', password: ''});
  }

  handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput 
          type="email"
          name="email"
          required
          value={this.state.email}
          label="email"
          handleChange={this.handleChange}
        />

        <FormInput 
          type="password" 
          name="password" 
          required 
          value={this.state.password} 
          label="password"
          handleChange={this.handleChange}
        />

        <input type="submit" value="Submit Form" />
      </form>
    </div>)
  }
};

export default SignIn;
