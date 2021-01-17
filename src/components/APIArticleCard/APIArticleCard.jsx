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
           {/* {if(props.user.articleCollection.includes(props.article.title)) ? 
           <h6>You Already Bookmarked This Piece!</h6>
           :
           <form onSubmit>
               <button type="submit">Boomark Article</button>
           </form>
            } */}

            {/* <form onSubmit={this.handleSubmit}>
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
            </form> */}
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