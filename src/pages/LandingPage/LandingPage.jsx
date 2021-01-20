import React, { Component } from 'react';
import APIArticleCard from '../../components/APIArticleCard/APIArticleCard';
import * as articleAPI from '../../services/article-api'
import authService from '../../services/authService';
import "./LandingPage.css";

class LandingPage extends Component {
    state = { 
        topNews: [],
        user: authService.getUser()
     }

    async componentDidMount() {
        const topNews = await articleAPI.getTopNews() 
        this.setState({topNews:topNews.articles}) 
    }

    render() { 
        return ( 
            <>
                <div>
                    {this.state.topNews.map(article =>
                      <APIArticleCard 
                      article={article}
                      key={article.url}
                      handleAddBookmark={this.props.handleAddBookmark}
                      userArticleCollection={this.props.userArticleCollection}
                      />
                      )} 
                </div>
            </>
         );
    }
}
 
export default LandingPage;