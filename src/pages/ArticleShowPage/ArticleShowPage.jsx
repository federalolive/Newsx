import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ArticleShowPage.css'
import * as articleAPI from '../../services/article-api'
import CommentCard from '../../components/CommentCard/CommentCard'

class ArticleShowPage extends Component {
    state = { 
        formData: {postedBy:this.props.user.name, postedByID:this.props.user._id, content:''},
        article: [],
     }


    async componentDidMount(){
        const article = await articleAPI.getArticle(this.props.location.state.article._id)
        this.setState({article: article})
    } 
    //  pass article id throughparams to find the article and create and push comment into its embedded array

    handleSubmit = e => {
        e.preventDefault()
        this.handleAddComment(this.state)
    }

    handleChange = e =>{
        const formData = {...this.state.formData, [e.target.name]:e.target.value}
        this.setState({
            formData:formData,
        })
    }

    handleAddComment = async (IdandFormData) =>{
        const updatedArticle = await articleAPI.addComment(IdandFormData)
        this.setState({
            article: updatedArticle
        })
    }

    render() { 
        const article = this.state.article
        console.log(article.comments)
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
                <div>

                    {article.comments ? article.comments.map((comment)=>
                    <CommentCard 
                        comment={comment}
                        user={this.props.user.name}
                        key={comment._id}
                    />
                    )
                    :
                    <p>Loading Comments</p>
                    }
                
                </div>
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