import React from "react";
import User from "./User";

const UserList = ({ users, handleDelete, handleEdit }) => {
  const userList = users.map((user) => {
    return (
      <User
        user={user}
        key={user.id}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    );
  });
  return <div className="user-list">{userList}</div>;
};

export default UserList;