import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as articleAPI from "../../services/article-api";
import ReplyCard from "../ReplyCard/ReplyCard";
import "./CommentCard.css";

class CommentCard extends Component {
  state = {
    formData: {
      postedBy: this.props.user.name,
      postedByID: this.props.user._id,
      content: "",
    },
    comment: [],
  };

  async componentDidMount() {
    const comment = await articleAPI.getComment(this.props.comment._id);
    this.setState({ comment: comment });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleAddReply(this.state);
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

  handleAddReply = async (idandFormData) => {
    const updatedComment = await articleAPI.addReply(idandFormData);
    this.setState({ comment: updatedComment });
  };

  render() {
    const comment = this.state.comment;
    const commenterId = comment.postedByID;
    return (
      <>
        <hr />
        <h5>
          <Link
            to={{
              pathname: "/profile/article/commenter",
              state: { commenterId },
            }}
          >
            {comment.postedBy}
          </Link>{" "}
          says:
        </h5>
        <p>"{comment.content}"</p>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="card reply-card-form ">
              <input
                type="text"
                name="content"
                value={this.state.formData.content}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Reply</button>
          </form>
          <div className="replies">
            {comment.replies ? 
            <ol>
              {comment.replies.map(reply => 
              <li>
                <ReplyCard
                  reply={reply}
                  user={this.props.user}
                  key={reply._id}
                />
              </li>
              )}
            </ol>
            :
            <p>Loading Replies</p>
              }
          </div>
        </div>
      </>
    );
  }
}

export default CommentCard;
