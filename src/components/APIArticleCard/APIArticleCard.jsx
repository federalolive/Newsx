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
                <div class="row">
                <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                        <img src={article.urlToImage} height='200px' alt="article feature content"/>
                    </div>
                    <div>
                        <span class="card-title">{article.title}</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                        <p>{article.author}</p>
                        <p>Date Published: {article.publishedAt}</p>
                        <p>Source: {article.source.name}</p>
                    </div>
                    <div>
                        <p>Synopsis: {article.description}</p>
                    </div>
                    <button class="card-action" onClick={this.handleSubmit}>Add Bookmark</button>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}
 
export default APIArticleCard;