import axios from "axios";
import React, { Component } from "react";
import User from "./User";

export default class Users extends Component {
  state = { users: [] };
  constructor() {
    super();
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        console.log(res.data);
        this.setState({ users: res.data });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div>
        <h1> Github Users</h1>
        {this.state.users.map((user) => {
          return <User user={user} />;
        })}
      </div>
    );
  }
}
