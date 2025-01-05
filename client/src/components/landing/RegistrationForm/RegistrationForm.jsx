import React from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <form id="register-form">
      <h2>Fill out the form for registration</h2>
      <div className="input-group">
        <label className="form-label" htmlFor="email"></label>
        <input
          className="form-control"
          id="email"
          type="email"
          placeholder="Email"
        />
        <small className="form-errors"></small>
      </div>
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
      <button className="btn mt-1 mb-2 btn-black">Register</button>
      <p>
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
