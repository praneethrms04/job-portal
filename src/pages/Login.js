import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      <Navbar />
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="home-title text-center lead fw-bolder">Welcome to Jooble</h2>
              <div className="login-wrapper">
                <h4 className="text-center">
                  {showSignup ? "Sign up" : "Login"}
                </h4>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    autoComplete="off"
                    autoFocus
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                  />
                </div>

                {showSignup && (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      autoComplete="off"
                    />
                  </div>
                )}
                <Link to="/jobs">
                  <div className="input-group">
                    <input
                      type="submit"
                      className="form-control btn btn-primary"
                      value={showSignup ? "Sign Up" : "Log In"}
                    />
                  </div>
                </Link>

                <div className="signup-btn text-primary" onClick={toggleSignup}>
                  {showSignup
                    ? "Already have an Account ? Login"
                    : "Don't have an Account? Signup"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
