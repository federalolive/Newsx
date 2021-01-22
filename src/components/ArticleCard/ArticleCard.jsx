import React, { Component } from "react";
import { Link } from "react-router-dom";
import "materialize-css";
import { Button, Card, Row, Col } from "react-materialize";
import './ArticleCard.css';

class ArticleCard extends Component {
  state = {
    formData: { id: this.props.article._id },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleDeleteArticle(this.state.formData.id);
  };

  render() {
    const article = this.props.article;
    return (
      <>
        <div class="row">
          <div class="col s12 m7">
            <div class="card" style={{ width: 600 }}>
              <div class="card-image">
                <img src={article.urlToImage} alt="article-header" />
                <span class="card-title">{article.title}</span>
              </div>

              <div class="card-content">
                <p>{article.title}</p>
              </div>
              <div class="card-action">
                <Link
                  to={{
                    pathname: "/profile/article",
                    state: { article },
                  }}
                >
                  {" "}
                  Read Article
                </Link>
              </div>

              <div class="card-action remove waves-effect waves-light" onClick={this.handleSubmit}>
                Remove From Bookmarks
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ArticleCard;
