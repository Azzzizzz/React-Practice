import React from "react";
import { Link } from "react-router-dom";

export default function User(props) {
  const { user } = props;

  return (
    <>
      <div
        className="card shadow p-3 mb-5 bg-white rounded"
        style={{
          width: "18rem",
          display: "inline-block",
          margin: "1rem",
          border: "none",
        }}
      >
        <img
          style={{ objectFit: "cover" }}
          width="200"
          height="200"
          className="card-img-top"
          //  width="200"
          //  height="200"
          //  object-fit="cover"
          src={user.avatar_url}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{user.login}</h5>
          <p className="card-text"></p>
          <Link to={`/users/${user.login}`} className="btn btn-primary">
            Select
          </Link>
        </div>
      </div>
    </>
  );
}
