import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div>
      <h1>User Details Page ....</h1>
      <h1>
        <Link to="/user/1">User 1</Link>
      </h1>
      <h1>
        <Link to="/user/2">User 2</Link>
      </h1>
      <h1>
        <Link to="/user/3">User 3</Link>
      </h1>
      <Outlet />
    </div>
  );
};

export default User;
