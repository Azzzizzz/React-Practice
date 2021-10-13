import axios from "axios";
import React, { Component } from "react";
import User from "./User";
import LoaderImg from "./img/loading.gif";

export default class Users extends Component {
  state = { users: [], loading: true };
  constructor() {
    super();
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        this.setState({ users: res.data, loading: false });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div>
        <h1> Github Users</h1>
        {this.state.loading === true ? <img src={LoaderImg} alt="" /> : null}
        {this.state.users.map((user) => {
          return <User user={user} />;
        })}
      </div>
    );
  }
}
