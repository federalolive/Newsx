import React, { Component } from 'react';

class APIArticleCard extends Component {
    state = { 
        formData: {
            title: '',
            sourceName: '',
            author: '',
            description: '',
            url: '',
            urlToImage: '',
            publishedAt: '',
            content: ''
        }   
     }

    handleSubmit = e => {
         const formData = {...this.state.formData, [e.target.name]: e.target.defaultValue}
        this.setState({formData: formData})
        console.log(formData)
        // this.handleBookmark(this.state.formData)
    }

    // handleBookmark = async (newBookmarkData) => }
    // const

    // handleChange = e => {
        
    // }
    render() { 
        const article = this.props.article
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
           {/* {if(props.user.articleCollection.includes(props.article.title)) ? 
           <h6>You Already Bookmarked This Piece!</h6>
           :
           <form onSubmit>
               <button type="submit">Boomark Article</button>
           </form>
            } */}

            <form onSubmit={this.handleSubmit}>
                <input 
                    name='title'
                    hidden
                    defaultValue={article.title}
                    type="text"
                />
                <input 
                    name='sourceName'
                    hidden
                    defaultValue={article.source.name}
                    type="text"
                />
                <input 
                    name='author'
                    hidden
                    defaultValue={article.author}
                    type="text"
                />
                <input 
                    name='description'
                    hidden
                    defaultValue={article.description}
                    type="text"
                />
                <input 
                    name='url'
                    hidden
                    defaultValue={article.url}
                    type="text"
                />
                <input 
                    name='urlToImage'
                    hidden
                    defaultValue={article.urlToImage}
                    type="text"
                />
                <input 
                    name='publishedAt'
                    hidden
                    defaultValue={article.publishedAt}
                    type="text"
                />
                <input 
                    name='content'
                    hidden
                    defaultValue={article.content}
                    type="text"
                />
                <button type="submit">
                    Bookmark
                </button>
            </form>
       </div>
         );
    }
}
 
export default APIArticleCard;

// const APIArticleCard = (props) => {
//     return ( 
//        <div>
//            <div>
//             <img src={props.article.urlToImage} height='200px' alt="article feature content"/>
//            </div>
//            <div>
//                <h4>{props.article.title}</h4>
//                <p>{props.article.author}</p>
//                <p>Date Published: {props.article.publishedAt}</p>
//                <p>Source: {props.article.source.name}</p>
//            </div>
//            <div>
//                <p>Synopsis: {props.article.description}</p>
//            </div>
//            {/* {if(props.user.articleCollection.includes(props.article.title)) ? 
//            <h6>You Already Bookmarked This Piece!</h6>
//            :
//            <form onSubmit>
//                <button type="submit">Boomark Article</button>
//            </form>
//             } */}

//             <form onSubmit={props.handleSubmitBookmark}>

//             </form>
//        </div>
//      );
// }
 
// export default APIArticleCard;