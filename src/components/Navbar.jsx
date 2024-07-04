import React from "react";
import "./Navbar.css"; // Import your CSS file for styling
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src={logo} alt="Travel World Logo" />
      </a>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>

        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
