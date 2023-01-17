import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login Page</span>
      <br />
      <form className="loginForm">
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Your Email..."
        />
        <br />
        <input
          type="password"
          className="loginInput"
          placeholder="Enter Your Password..."
        />
        <br />
        <button className="loginButton">Login</button>
        <br />
        <button className="loginRegisterButton">
          <Link className='link' to='/register'>Register</Link>
        </button>
      </form>
    </div>
  );
}
