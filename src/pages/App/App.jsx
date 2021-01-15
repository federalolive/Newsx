import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import ArticleSearch from '../ArticleSearch/ArticleSearch'
import ArticleShowPage from '../ArticleShowPage/ArticleShowPage'
import LandingPage from '../LandingPage/LandingPage'
import PersonalProfilePage from '../PersonalProfilePage/PersonalProfilePage'
import "./App.css";
import UserProfilePage from "../UserProfilePage/UserProfilePage";

class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>NEWSX</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() =>
            user ? <Users /> : <Redirect to="/login" />
          }
        />
        <Route
          exact path="/articles"
          render={() =>
            user ? <ArticleSearch 
              user = {this.state.user}
            /> 
            : 
            <Redirect to="/login" />
          }
        />
        <Route
          exact path="/profile/article"
          render={() => 
            user ? <ArticleShowPage 
              user = {this.state.user}
          /> 
          : 
          <Redirect to="/login" />
          }
        />
        <Route
          exact path="/"
          render={() => 
            <LandingPage />
          }
        />
        <Route
          exact path="/profile"
          render={() => 
            user ? <PersonalProfilePage 
            user = {this.state.user}
        /> 
          : 
          <Redirect to="/login" />
          }
        />
        <Route
          exact path="/users/show"
          render={({ location }) =>
            user ? <UserProfilePage 
            user = {this.state.user}
            location={ location }
        /> 
          : 
          <Redirect to="/login" />
          }
        />
      </>
    );
  }
}

export default App;
