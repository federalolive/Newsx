import React, { Component } from "react";
import * as userService from "../../services/userService";
import "./CommentLinkedUserProfilePage.css";

class CommentLinkedUserProfilePage extends Component {
  state = {
    user: [],
  };

  async componentDidMount() {
    const user = await userService.getCommenter(
      this.props.location.state.commenterId
    );
    this.setState({ user: user });
  }

  render() {
    return (
      <div className="comment-profile-div">
        <div className="card comment-user-card z-depth-5">
          <div id="user-avatar">
            {this.state.user.avatar ? 
            <img
                src={this.state.user.avatar}
                className="comment-user-img responsive-img z-depth-1"
                style={{ width: 100 }}
                alt="user image" />  : 
              ''
            }
          </div>
          <p className="card card-title">{this.state.user.name}</p>
          {this.state.user.bio ? (
            <p>{this.state.user.bio}</p>
          ) : (
            <p>
              {this.state.user.name} doesn't trust the internet and thus has
              opted to not share about themselves
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default CommentLinkedUserProfilePage;
