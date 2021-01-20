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
            <div class="card" style={{ width: 600 }}>
              <div class="card-image">
                <img
                  src={article.urlToImage}
                  height="200px"
                  alt="article feature content"
                />
                <span class="card-title">{article.title}</span>
              </div>

              <div class="card-content">
                <p>{article.author}</p>
                <p>Date Published: {article.publishedAt}</p>
                <p>Source: {article.source.name}</p>
              </div>

              <div>
                <p>Synopsis: {article.description}</p>
              </div>
              {this.props.user ? (
                <button
                  class="btn-floating halfway-fab waves-effect waves-light red"
                  onClick={this.handleSubmit}
                >
                  {" "}
                  <i class="material-icons">add</i>
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
