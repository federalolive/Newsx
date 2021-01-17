import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ArticleShowPage.css'

class ArticleShowPage extends Component {
    state = {  }
    render() { 
        const article = this.props.location.state.article
        console.log(article)
        return ( 
            <>
                <h1>{article.title}</h1>
                <img src={article.urlToImage} alt="article-header"/>
                <p>{article.author}</p>
                <p>{article.publishedAt}</p>
                <p>{article.sourceName}</p>
                <p>{article.content} For the full article, click <a href={article.url} target="_blank" rel="noreferrer">here</a>.</p>
                <Link to={{
                    pathname: '/profile'
                }}> Return
                </Link>
            </>
         );
    }
}
 
export default ArticleShowPage;



// class component to hold state for comment formData


// contain headline, author, date published, source Url, article content
// link back to profile page

// button to expand comments section 
// function to map over comments rendering a Comment Card for each

// form to add comment