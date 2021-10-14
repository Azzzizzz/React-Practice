import axios from "axios";
import React, { Component } from "react";
import Error from "./util/Error";
import Loader from "./util/Loader";
import User from "./User";

export default class Users extends Component {
  state = { users: [], loading: true, hasError: false };
  constructor() {
    super();
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        this.setState({ users: res.data, loading: false });
      })
      .catch((e) => this.setState({ hasError: true, loading: false }));
  }

  render() {
    return (
      <div>
        <h1> Github Users</h1>
        <Loader loading={this.state.loading} />
        <Error show={this.state.hasError} />

        {this.state.users.map((user) => {
          return <User user={user} />;
        })}
      </div>
    );
  }
}
