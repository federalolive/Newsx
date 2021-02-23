import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import "./Login.css";

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      this.updateMessage(err.message);
    }
  };

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    const {email, pw} = this.state
    return (
      <div className="center topnews">
        <form 
        autoComplete="off" 
        onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <div className="login-input z-depth-2">
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
          
          <div className="login-input z-depth-2">
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
          />
          </div>
          <br />
          <button className="btn green">Log In</button>&nbsp;&nbsp;&nbsp;
          <Link className="btn red" to="/">
            Cancel
          </Link>
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default LoginPage;
