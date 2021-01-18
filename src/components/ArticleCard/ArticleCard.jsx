// renders descrption, headline, imagurl, author, source, published at
// button to delete from collection, [Remove From Bookmarks]
// Link element to read the full article on Article Show Page
import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class ArticleCard extends Component {
    state = { 
            formData: {
                _id: this.props.article._id
        }
     }


    render() { 
        
        const article = this.props.article
        console.log(article)
        return ( 
            <>
                <div>
                    <img src={article.urlToImage} height='200px' alt="article header"/>
                    <h1>{article.title}</h1>
                    <h3>{article.author}</h3> 
                    <h4>{article.sourceName}</h4>
                    <p>{article.description}</p>
                </div>
            </>
         );
    }
}
 
export default ArticleCard;