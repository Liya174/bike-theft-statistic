import React, { Component } from "react";
import { Link } from "react-router-dom";

class UsersList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users });
      });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>

        <Link to="/create">Создать пользователя</Link>
      </div>
    );
  }
}

export default UsersList;
