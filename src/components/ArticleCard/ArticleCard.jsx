import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ArticleCard extends Component {
    state = { 
        formData: {_id: this.props.article._id}
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
            <hr />

            </>
            
            // <button type="delete">Remove from Collection</button>
         );
    }
}
 
export default ArticleCard
 



// renders descrption, headline, imagurl, author, source, published at
// button to delete from collection, [Remove From Bookmarks]
// Link element to read the full article on Article Show Page
