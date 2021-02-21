import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ArticleShowPage.css";
import * as articleAPI from "../../services/article-api";
import CommentCard from "../../components/CommentCard/CommentCard";

class ArticleShowPage extends Component {
  state = {
    formData: {
      postedBy: this.props.user.name,
      postedByID: this.props.user._id,
      content: "",
    },
    article: [],
  };

  async componentDidMount() {
    const article = await articleAPI.getArticle(
      this.props.location.state.article._id
    );
    this.setState({ article: article });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleAddComment(this.state);
    this.setState({ formData: { content: "" } });
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData: formData,
    });
  };

  handleAddComment = async (IdandFormData) => {
    const updatedArticle = await articleAPI.addComment(IdandFormData);
    this.setState((state) => ({
      article: updatedArticle,
    }));
  };

  render() {
    const article = this.state.article;
    return (
      <>
        {article ? (
          <div>
            <h1>{article.title}</h1>

            <img
              className="article-show-img"
              src={article.urlToImage}
              alt="article-header"
            />
            <br />
            <br />

                    <img className="article-show-img z-depth-1" src={article.urlToImage} alt="article-header"/>
                    <br />
                    <br />

            <p className="article-show-info">
              {article.content}
              <br />
              For the full article, click{" "}
              <a href={article.url} target="_blank" rel="noreferrer">
                here
              </a>
              .
            </p>
            <br />

                    <p className="article-show-info article-show-title"><b>Written By:</b>{article.author}</p>
                    <p className="article-show-info"><b>Date:</b>{article.publishedAt}</p>
                    <p className="article-show-info"> <b>Source:</b>{article.sourceName}</p>
                    <br />

                    <p className="article-show-info">{article.content} 
                    <br />
                    For the full article, click <a href={article.url} target="_blank" rel="noreferrer">here</a>.</p>
                    <br />

                    <Link className="article-show-info" to={{
                        pathname: '/profile'
                    }}> <button className="z-depth-2"> Return </button>
                    </Link>
                    </div>
                    :
                    <h5 className="article-show-info">Loading Article Content</h5>
                    }
                <br />
                <hr />
                <br />
                <div className="comment-cards-main">
                    <h5>Add a comment:</h5>
                <form className="comment-form" onSubmit={this.handleSubmit}>
                
                <div className="card comment-card-input">
                    <input 
                        type="text"
                        name="content"
                        value={this.state.formData.content}
                        onChange={this.handleChange}
                        />
                    
                </div>
                    <button type="submit" className="z-depth-2">Add Comment</button>
                </form>
                <div>

                    {article.comments ? article.comments.map((comment)=>
                    <CommentCard 
                    comment={comment}
                    user={this.props.user}
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
