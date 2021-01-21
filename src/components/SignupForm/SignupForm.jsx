import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import './SignupForm.css'

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    // bio: "",
    // avatar: ""
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <div>
        <h3>Sign Up</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>

          <div className="signup-input">
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          </div>

          <br />
          <label htmlFor="email">Email: </label>
          
          <div className="signup-input">
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          </div>

          <br />
          <label htmlFor="password">Password: </label>

          <div className="signup-input">
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          </div>

          <br />
          <label htmlFor="confirm">Confirm Password: </label>

          <div className="signup-input">
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
          </div>

          <br />
          <button disabled={this.isFormInvalid()}>Sign Up</button>
          &nbsp;&nbsp;
          <Link to="/"><button>Cancel</button></Link>
        </form>
      </div>
    );
  }
}

export default SignupForm;
