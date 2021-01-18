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

class App extends Component {
  state = {
    user: authService.getUser(),
    userArticleCollection: []
  };


  async componentDidMount(){
    const userArticleCollection = await userService.getArticleCollection()
    this.setState({userArticleCollection: userArticleCollection})
    console.log(userArticleCollection)
  }

   handleAddBookmark = async (formData) => {
        console.log(formData)
        const newArticle = await articleAPI.create(formData)
        this.setState(state => ({ 
          userArticleCollection: [...state.userArticleCollection, newArticle]
        }), ()=> this.props.history.push('/articles/search'))
    }
  
  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleDeleteArticle = async id =>{
    await userService.removeArticleFromCollection(id)
    this.setState(state=>({
      userArticleCollection: this.state.userArticleCollection.filter(article=> article._id !== id)
    }), ()=> this.props.history.push('/profile'))
  }


  handleDeleteArticle = async id =>{
    await userService.removeArticleFromCollection(id)
    let idx = this.state.userarticleCollection.findIndex((a)=>a._id === id)
    const userArticleCollection = this.state.userarticleCollection.splice(idx, 1)
    this.setState(state=>({
      userArticleCollection: userArticleCollection
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
          exact path="/articles/search"
          render={({location, history}) =>
            user ? <ArticleSearch 
              user = {this.state.user}
              location={location}
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
            user = {this.state.user}
            userArticleCollection={this.state.userArticleCollection}
            handleDeleteArticle={this.handleDeleteArticle}
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
      </>
    );
  }
}

export default App;
