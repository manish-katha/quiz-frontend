import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { server } from "../index";
import axios from "axios";
import "../styles/login.css"

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
   try {
    e.preventDefault();
    console.log("first");
    const { data } = await axios.post(
      `${server}/users/new`,
      {
        name,
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
    console.log("last");
    alert("Register Succefully")
    navigate('/login')
   } catch (error) {
    alert("Registration fail")
    navigate('/login')
   }
  };

  return (
    <div className="Login">
        <Link to="/">Home</Link>
      <form onSubmit={handleSubmit}>
        <section>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button type="submit">Register</button>
          <h4>Or</h4>
          <Link to="/login">Login</Link>
       
      </form>
    </div>
  );
};
