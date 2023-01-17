import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register Page</span>
      <br />
      <form className="registerForm">
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Username..."
        />
        <br />
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Email..."
        />
        <br />
        <input
          type="password"
          className="registerInput"
          placeholder="Enter Your Password..."
        />
        <br />
        <button className="registerButton">Register</button>
        <br />
        <button className="registerLoginButton">
         <Link className="link" to='/login'>Login</Link>
        </button>
      </form>
    </div>
  );
}
