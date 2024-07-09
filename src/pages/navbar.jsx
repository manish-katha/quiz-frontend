// Navbar.js

import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="logo">
        <a href="/">Logo</a>
      </div> */}
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/create">Create Quiz</a>
        </li>
        <li>
          <a href="/read">Solve Quiz</a>
        </li>
      </ul>
      <ul className="login-links">
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
