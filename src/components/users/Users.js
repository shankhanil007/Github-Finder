import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
  return (
    <>
      {props.users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={props.clearUsers}>
          Clear
        </button>
      )}
      <div style={userStyle}>
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
