import React from "react";
import avatar from "../../assets/avatar.png";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar bg-dark position-absolute w-100" style={{ zIndex: "-1", color: "whitesmoke" }}>
      <div className="mx-5">IT Engine</div>
      <div>
        <span>{user.email.split("@")[0]}</span>
        <img
          src={avatar}
          alt="..."
          className="rounded-circle mx-2"
          style={{
            height: "39px",
            border: "1px solid rgba(255, 255, 255, 0.37)",
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
