import React, { Component } from 'react';

class APIArticleCard extends Component {
    state = { 
        formData: {
            title: this.props.article.title,
            sourceName: this.props.article.source.name,
            author: this.props.article.author,
            description: this.props.article.description,
            url: this.props.article.url,
            urlToImage: this.props.article.urlToImage,
            publishedAt: this.props.article.publishedAt,
            content: this.props.article.content
        }   
     }

     handleSubmit = e => {
		e.preventDefault();
		this.props.handleAddBookmark(this.state.formData);
		};

    render() { 
        const article = this.props.article
        const userArticleCollection = this.props.userArticleCollection
        return ( 
            <div>
           <div>
            <img src={article.urlToImage} height='200px' alt="article feature content"/>
           </div>
           <div>
               <h4>{article.title}</h4>
               <p>{article.author}</p>
               <p>Date Published: {article.publishedAt}</p>
               <p>Source: {article.source.name}</p>
           </div>
           <div>
               <p>Synopsis: {article.description}</p>
           </div>
           <button onClick={this.handleSubmit}>Add Bookmark</button>

           {/* {userArticleCollection.map((userArticle)=> (
               userArticle.url === article.url 
               ?
               <button onClick={this.handleSubmit}>Add Bookmark</button>
               
               :
               <p></p>
           )
           )} */}

           {/* {
           userArticleCollection.includes(article.url) 
           ?
           <h1>You have bookmarked this</h1>
           :
           <button onClick={this.handleSubmit}>Add Bookmark</button>
        } */}
          
       </div>
         );
    }
}
 
export default APIArticleCard;