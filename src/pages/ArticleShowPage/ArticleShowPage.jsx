import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ArticleShowPage.css'

class ArticleShowPage extends Component {
    state = { 
        formData: {postedBy:this.props.user.name, postedByID:this.props.user._id, content:''},
        comments: [],
     }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddComment(this.state.formData)
    }

    handleChange = e =>{
        const formData = {...this.state.formData, [e.target.name]:e.target.value}
        this.setState({
            formData:formData,
        })
    }

    render() { 
        const article = this.props.location.state.article
        console.log(article)
        return ( 
            <>
                <div>
                    
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
                </div>

                <div>
                    <p>Add a comment!</p>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="content"
                        value={this.state.formData.content}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add Comment</button>
                </form>

                </div>
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