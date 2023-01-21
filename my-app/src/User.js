import React from "react";

function User({ name, surname, salary}) {
  return <p className="user">
    <span>{name}</span>
    <span>{surname}</span>
    <span>{salary}</span>
  </p>
}

export default User