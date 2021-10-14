import axios from "axios";
import React, { Component } from "react";
import Loader from "./Loader";

export default class UserById extends Component {
  state = { user: {}, loading: true };
  constructor(props) {
    super();
    const id = props.match.params.id;
    axios
      .get(`https://api.github.com/users/${id}`)
      .then((res) => this.setState({ user: res.data, loading: false }))
      .catch((e) => ({ loading: false }));
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <Loader loading={this.state.loading} />

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
            <h4 className="card-title">{user.name}</h4>
            <h6 className="card-title">Github Username: {user.login}</h6>
            <p className="card-text">{user.location}</p>
            <p>
              Following <span class="badge bg-danger">{user.following}</span>
            </p>
            <p>
              Follwers <span class="badge bg-secondary">{user.followers}</span>
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
