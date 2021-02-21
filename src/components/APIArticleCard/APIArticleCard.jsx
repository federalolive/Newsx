import React, { Component } from "react";

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
      content: this.props.article.content,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddBookmark(this.state.formData);
  };

  render() {
    const article = this.props.article;
    return (
      <>
        <div class="row">
          <div class="col s12 m6">
            <div class="card z-depth-5" style={{ width: 425 }}>
              <div class="card-image z-depth-1">
                <img
                  src={article.urlToImage}
                  height="200px"
                  alt="article feature content"
                  className="responsive-img"
                />
                <span class="article-title"><p className="card-title blue-grey darken-4">{article.title}</p></span>
              </div>
              <div class="card-content">
                <p><b>Written by:</b> {article.author}</p>
                <p><b>Date Published:</b> {article.publishedAt}</p>
                <p><b>Source:</b> {article.source.name}</p>
              </div>
              <div class="card-content">
                <p>Synopsis: {article.description}</p>
              </div>
              {this.props.user ? (
                <button
                  class="btn-floating halfway-fab waves-effect waves-light"
                  onClick={this.handleSubmit}
                >
                  {" "}
                  <i class="material-icons indigo darken-4">add</i>
                </button>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default APIArticleCard;
