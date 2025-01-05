import React from "react";
import { Link } from "react-router-dom";

const ResetForm = () => {
  return (
    <form id="reset-form">
      <h2>Enter your email to recover your account</h2>
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
      <button className="btn mt-1 mb-2 btn-black">Reset Password</button>
      <div className="f jc g-5">
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </form>
  );
};

export default ResetForm;
