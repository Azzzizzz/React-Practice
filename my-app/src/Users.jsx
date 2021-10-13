import React, { Component } from "react";

import axios from "axios";
import User from "./User";

class Users extends Component {
  state = { users: [] };
  constructor() {
    super();

    axios
      .get("https://api.github.com/users")
      .then((res) => this.setState({ users: res.data }))
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <>
        {/* {this.state.users.map((user) => (
          <User user={user} />
        ))} */}
        <h1>Userss</h1>
        {this.state.users.map((user) => (
          <User user={user} />
        ))}
      </>
    );
  }
}

export default Users;
