import React, { Component } from 'react';
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
                <h1>Landing Page</h1>
            </>
         );
    }
}
 
export default LandingPage;