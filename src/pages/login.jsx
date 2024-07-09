import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { server } from "..";
import axios from "axios";
import "../styles/login.css";
import Footer from "./footer";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log("success 1");
      const { data } = await axios.post(
        `${server}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("success 2");
      alert("Login successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Login fail");
      navigate("/register");
    }
  };

  return (
    <>
      <div className="Login">
      <Link to="/">Home</Link>
        <form onSubmit={handleSubmit}>
          <section>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </section>
          <button type="submit">Login</button>
          <h4>Or</h4>
          <Link to="/register">Sign Up</Link>
        </form>
      </div>
      {/* <div> <Footer/></div>
       */}
    </>
  );
};
