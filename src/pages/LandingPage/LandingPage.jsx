import React, { Component } from "react";
import APIArticleCard from "../../components/APIArticleCard/APIArticleCard";
import * as articleAPI from "../../services/article-api";
import authService from "../../services/authService";
import "./LandingPage.css";

class LandingPage extends Component {
  state = {
    topNews: [],
    user: authService.getUser(),
  };

  async componentDidMount() {
    const topNews = await articleAPI.getTopNews();
    this.setState({ topNews: topNews.articles });
  }

    render() { 
        return ( 
            <>
            <div className="topnews responsive center z-depth-2 article-title">
              <h1>Breaking News Highlights</h1>
            </div>
                <div className="topnews">
                    {this.state.topNews.map(article =>
                      <APIArticleCard 
                      article={article}
                      key={article.url}
                      handleAddBookmark={this.props.handleAddBookmark}
                      user={this.state.user}
                      />
                      )} 
                </div>
                <div className="topnews">
                <p>Fake news got you down? Click <a href="https://snap-out-of-it.herokuapp.com/Login" target="_blank">here</a>!
                </p>
                </div>
                </>
         );
    }
}

export default LandingPage;
