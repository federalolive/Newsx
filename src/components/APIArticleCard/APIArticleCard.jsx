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
        <div className="row">
          <div className="col s12 m6">
            <div className="card z-depth-5" style={{ width: 425 }}>
              <div className="card-image z-depth-1">
                <img
                  src={article.urlToImage}
                  height="200px"
                  alt="article feature content"
                  className="responsive-img"
                />
                <span className="article-title"><p className="card-title blue-grey darken-4">{article.title}</p></span>
              </div>
              <div className="card-content">
                <p><b>Written by:</b> {article.author}</p>
                <p><b>Date Published:</b> {article.publishedAt}</p>
                <p><b>Source:</b> {article.source.name}</p>
              </div>
              <div className="card-content">
                <p>Synopsis: {article.description}</p>
              </div>
              {this.props.user ? (
                <button
                  className="btn-floating halfway-fab waves-effect waves-light"
                  onClick={this.handleSubmit}
                >
                  {" "}
                  <i className="material-icons indigo darken-4">add</i>
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
