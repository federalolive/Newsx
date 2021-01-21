import React, { Component } from 'react';
import './ArticleSearch.css'
import * as articleAPI from '../../services/article-api'
import APIArticleCard from '../../components/APIArticleCard/APIArticleCard'

class ArticleSearch extends Component {
    state = { 
        articles: [],
        formData: {
            query: '',   
        }    
     }

     handleSubmit = (e) => { 
         // prevents user from triggering an autmatic refresh of the page and api call before they finish typing and submitting their query
         e.preventDefault()
         this.handleArticleSearch(this.state.formData)
         const formData = {query:''}
         this.setState({ formData:formData })
     }
     handleChange= (e) => {
         // handle change is resetting for formData in state with the input from the user, which will then be passed into our handleArticleSearch function above
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        // formData is NOT resetting after search?? ASK/FIX THIS
        this.setState({formData:formData})

     }
     handleArticleSearch = async(formData) => {
         // this sets our articles array in state to the result of our api call we are waiting for, articleSearch, which lives in our services folder and allows us to talk to the backend where our actual api call lives
        const articles = await articleAPI.articleSearch(formData)
        console.log(articles.articles)
        this.setState({articles: articles.articles})
     }
    render() {
        const user = this.props.user
        return ( 
            <>
            <h1>Search</h1>
            <form onSubmit={this.handleSubmit} className="topnews" > 
            <div className='input'>      
             <input
                type='text'
                name='query'
                value={this.state.formData.query}
                onChange={this.handleChange}          
            /> 
            </div>   
            <button className="btn-style" type='submit'>Search Articles</button> </form>
            
            {this.state.articles.length ?
            <div className="article-list topnews">
                {this.state.articles.map(article => 
                <APIArticleCard 
                    article={article}
                    user={user}
                    key={article.url}
                    handleAddBookmark={this.props.handleAddBookmark}
                />
                
                )} </div>
                :
                <h3></h3>
                }
            </>
         );
    }
}
 
export default ArticleSearch;



// we need to render search form, that includes our query information, which on submit gets sent to the back end to handle our API call

// class component: because our state is going to be our form data that we are submitting

// onsubmit and handlechange functions, which will update the formData, and then will trigger the apir-call in services, which then talks to the backend server 


// results that are returned will rendered in APIAritcle Card, which will have a button to add the article to req.user's collection 
// another set of handle change functions?
