import React, { Component } from "react";
import { getAllUsers } from "../../services/userService";
import UserCard from "../../components/UserCard/UserCard";
import "./Users.css";

class Users extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const users = await getAllUsers();
    this.setState({ users });
  }

  render() {
    return (
      <div className="users">
        <h1 className="article-title">Subscribers</h1>
        <ul>
          {this.state.users.map((user) => (
            <li>
              <UserCard user={user} key={user._id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
