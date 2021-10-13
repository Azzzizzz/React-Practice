import axios from "axios";
import React, { Component } from "react";

export default class UserById extends Component {
  state = { user: {} };
  constructor(props) {
    super();
    const id = props.match.params.id;
    axios
      .get(`https://api.github.com/users/${id}`)
      .then((res) => this.setState({ user: res.data }))
      .catch((e) => console.log(e));
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <h1>User by ID </h1>
        <div
          className="card"
          style={{ width: "18rem", display: "inline-block", margin: "1rem" }}
        >
          <img
            width="200"
            height="200"
            className="card-img-top"
            src={user.avatar_url}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{user.login}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              {user.type}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
