// Navbar.js

import React, { useContext } from "react";
import "../styles/navbar.css";
import { Context, server } from "..";
import axios from "axios";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const logoutHandler = async () => {
    console.log("Logout button clicked"); // Log for checking button click

    try {
      const response = await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      console.log("Logout response:", response); // Log the response from the server
      setIsAuthenticated(false);
      console.log("User logged out, state updated to:", isAuthenticated);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

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
          {isAuthenticated ? (
            <button onClick={logoutHandler} className="btn">
              Logout
            </button>
          ) : (
            <a href="/login">Login</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
