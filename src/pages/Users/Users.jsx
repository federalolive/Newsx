import React, { Component } from "react";
import { getAllUsers } from "../../services/userService";
import UserCard from '../../components/UserCard/UserCard'

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
      <div>
        <h1>User List</h1>
        {this.state.users.map((user) => (
        <UserCard 
          user={user}
          key={user._id}
        />
        ))}
      </div>
    );
  }
}

export default Users;