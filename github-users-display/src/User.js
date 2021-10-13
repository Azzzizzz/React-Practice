import React from "react";

export default function User(props) {
  const { user } = props;

  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", display: "inline-block", margin: "1rem" }}
      >
        <img
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
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            {user.type}
          </a>
        </div>
      </div>
    </>
  );
}
