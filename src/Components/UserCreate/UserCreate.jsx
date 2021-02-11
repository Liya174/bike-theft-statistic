import React, { Component } from "react";

export class UserCreate extends Component {
  state = {
    name: "",
  };

  changeNameValue = (event) => {
    this.setState({ name: event.target.value });
  };

  addNewUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(this.state.name),
      header: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      alert("Hohohoh");
      this.setState({ name: "" });
    });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <input
          type="text"
          name="name"
          placeholder="Username"
          value={name}
          onChange={this.changeNameValue}
        />
        <input
          type="button"
          value="Создать"
          disabled={!name.length}
          onClick={this.addNewUser}
        />
      </div>
    );
  }
}
