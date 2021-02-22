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
import * as userService from '../../services/userService'
import * as articleAPI from '../../services/article-api'
import EditProfilePage from "../EditProfilePage/EditProfilePage";
import CommentLinkedUserProfilePage from "../CommentLinkedUserProfilePage/CommentLinkedUserProfilePage";

class App extends Component {
  state = {
    user: authService.getUser(),
    userArticleCollection: []
  };


  async componentDidMount(){
    const userArticleCollection = await userService.getArticleCollection()
    this.setState({userArticleCollection: userArticleCollection})
  }

   handleAddBookmark = async (formData) => {
        const newArticle = await articleAPI.create(formData)
        this.setState(state => ({ 
          userArticleCollection: [...state.userArticleCollection, newArticle]
        }), ()=> this.props.history.push('/profile'))
    }
  
  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleUpdateUser = async formData =>{
    const user = await userService.updateUserProfile(formData)
    this.setState(state =>({
      user: user,
    }), ()=> this.props.history.push('/profile'))
  }

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
          exact path="/articles/search"
          render={({history}) =>
            user ? <ArticleSearch 
              user = {this.state.user}
              history={history}
              handleAddBookmark={this.handleAddBookmark}
            /> 
            : 
            <Redirect to="/login" />
          }
        />
        <Route
          exact path="/profile/article"
          render={({location}) => 
            user ? <ArticleShowPage 
              user = {this.state.user}
              location = {location}
          /> 
          : 
          <Redirect to="/login" />
          }
        />
        <Route
          exact path="/"
          render={() => 
            <LandingPage
            handleAddBookmark={this.handleAddBookmark}
            />
          }
        />
        <Route
          exact path="/profile"
          render={() => 
            user ? <PersonalProfilePage 
        /> 
          : 
          <Redirect to="/login" />
          }
        />
        <Route
          exact path="/users/show"
          render={({ location }) =>
            user ? <UserProfilePage 
            location={ location }
        /> 
          : 
          <Redirect to="/login" />
          }
        />
        <Route 
          exact path="/profile/edit"
          render={({history, location})=>
        user 
        ? <EditProfilePage 
          location={location}
          user={user}
          handleUpdateUser={this.handleUpdateUser}
        /> 
        : <Redirect to="/login" />
      }
        />
        <Route
          exact path="/profile/article/commenter"
          render={({location}) =>
            user ? 
            <CommentLinkedUserProfilePage 
              location={location}
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
