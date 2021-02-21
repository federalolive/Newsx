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
         e.preventDefault()
         this.handleArticleSearch(this.state.formData)
         const formData = {query:''}
         this.setState({ formData:formData })
     }
     handleChange= (e) => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({formData:formData})

     }
     handleArticleSearch = async(formData) => {
        const articles = await articleAPI.articleSearch(formData)
        console.log(articles.articles)
        this.setState({articles: articles.articles})
     }
    render() {
        const user = this.props.user
        return ( 
            <>
            <form onSubmit={this.handleSubmit} className="topnews"> 
            <div className='input z-depth-2'>      
             <input
                type='text'
                name='query'
                value={this.state.formData.query}
                onChange={this.handleChange}          
            /> 

            </div>   
            <button className="btn-style z-depth-2" type='submit'>Search Articles</button> 

            </form>
            

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
