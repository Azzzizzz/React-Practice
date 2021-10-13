import React from "react";

export default function User(props) {
  const { user } = props;
  return (
    <div>
      <h3>{user.login}</h3>
      <h4>{user.id}</h4>
    </div>
  );
}
