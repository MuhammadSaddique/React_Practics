import React from "react";
import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <>
      <div>
        <h1>This is my Product Page</h1>
      </div>
      <nav>
        <Link to="shirts">Shirts</Link>
        <Link to="jeans">Jeans</Link>
      </nav>
      <Outlet/>
    </>
  );
};

export default Products;
