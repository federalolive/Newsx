import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

class ArticleCard extends Component {
    state = { 
        formData: {id: this.props.article._id}
     }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleDeleteArticle(this.state.formData.id)
    }

    render() { 
        const article = this.props.article
        return ( 
            <>
         

            <img src={article.urlToImage} alt="article-header"/>
            <h1>{article.title}</h1>
    
            <Link to={{
                pathname: '/profile/article', 
                state: { article }
            }} > 
            <h3>Read Article</h3>
            </Link>
            <button onClick={this.handleSubmit}>Remove From Bookmarks</button>
            <hr />

            </>
         );
    }
}
 
export default ArticleCard
 


