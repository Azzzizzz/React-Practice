import axios from "axios";
import React, { Component } from "react";
import LoaderImg from "./img/loading.gif";

export default class UserById extends Component {
  state = { user: {}, laoding: true };
  constructor(props) {
    super();
    const id = props.match.params.id;
    axios
      .get(`https://api.github.com/users/${id}`)
      .then((res) => this.setState({ user: res.data, laoding: false }))
      .catch((e) => console.log(e));
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        {this.state.laoding === true ? <img src={LoaderImg} alt="" /> : null}
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
