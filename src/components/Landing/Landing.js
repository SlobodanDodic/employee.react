import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/favicon.png";

const Hero = () => {
  return (
    <div className="container div-container">
      <img id="rotateImg" src={logo} alt="logo" />
      <div className="div-inner-container">
        <h3>App for</h3>
        <h3>
          <a
            href="https://www.itengine.rs/"
            rel="noopener noreferrer"
            target="_blank"
          >
            IT Engine
          </a>
        </h3>

        <h3> office manager</h3>
      </div>
      <button
        type="button"
        className="btn btn-outline-secondary m-4"
        component={Link}
        to="/auth"
      >
        Sign in
      </button>
    </div>
  );
};

export default Hero;
