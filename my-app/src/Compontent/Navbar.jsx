import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const NavLinkCSS = ({ isActiv }) => {
    return {
      fontWeight: isActiv ? "bold" : "normal",
      fontSize: isActiv ? "23px" : "20px",
    };
  };
  return (
    <div>
      <nav className="main-nav">
        <NavLink style={NavLinkCSS} to="/">
          Home
        </NavLink>
        <NavLink style={NavLinkCSS} to="/products">
          Products
        </NavLink>
        <NavLink style={NavLinkCSS} to="/about">
          About
        </NavLink>
        <NavLink style={NavLinkCSS} to="/contact">
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
