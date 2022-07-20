import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { SiDash, SiMonkeytie } from "react-icons/si";
import { BsPeopleFill, BsInfoCircleFill } from "react-icons/bs";
import { GiHealthIncrease } from "react-icons/gi";

const Sidebar = () => {
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <h4 className="py-4 text-white-50 mx-auto">
        <span className="mx-3">Office manager IT</span>
      </h4>

      <nav className="nav flex-column">
        <Link to={"/"} className="nav-link link-light">
          <SiDash />
          <span className="p-3">Dashboard</span>
        </Link>
        <Link to={"/employees"} className="nav-link link-light">
          <BsPeopleFill />
          <span className="p-3">Employees</span>
        </Link>
        <Link to={"/employee"} className="nav-link link-light">
          <SiMonkeytie />
          <span className="p-3">Employee</span>
        </Link>
        <Link to={"/employee"} className="nav-link link-light">
          <GiHealthIncrease />
          <span className="p-3">Benefits</span>
        </Link>
        <Link to={"/employee"} className="nav-link link-light">
          <BsInfoCircleFill />
          <span className="p-3">Info</span>
        </Link>
        <br />
        <Link to={"/clerks"} className="nav-link link-light">
          <BsPeopleFill />
          <span className="p-3">Clerks</span>
        </Link>
      </nav>
    </Menu>
  );
};

export default Sidebar;
