import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const setLocation = () => {
    navigate("/123");
  };
  return (
    <form id="login-form">
      <h2>Welcome back!</h2>
      <div className="input-group">
        <label className="form-label" htmlFor="username"></label>
        <input
          className="form-control"
          id="username"
          type="text"
          placeholder="Username"
        />
        <small className="form-errors"></small>
      </div>
      <div className="input-group">
        <label className="form-label" htmlFor="password"></label>
        <input
          className="form-control"
          id="password"
          type="password"
          placeholder="Password"
        />
        <small className="form-errors"></small>
      </div>
      <div className="checkbox">
        <label htmlFor="remember_me">
          <input type="checkbox" name="remember_me" id="remember_me" />
          Remember me
        </label>
        <Link to="/reset">Reset password</Link>
      </div>
      <button onClick={() => setLocation()} className="btn my-2 btn-black">
        Login
      </button>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </form>
  );
};

export default LoginForm;
