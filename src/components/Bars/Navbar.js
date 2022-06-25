import React from "react";
import avatar from "../../assets/avatar.png";

const Navbar = () => {
  return (
    <nav
      className="navbar bg-dark position-absolute w-100"
      style={{ zIndex: "-1", color: "whitesmoke" }}
    >
      <div className="mx-5">IT Engine</div>
      <div>
        <span>Nikola Vranjković</span>
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
