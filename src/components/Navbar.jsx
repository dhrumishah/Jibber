import React from "react";
import Profile from "../img/profile.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Jibber</span>
      <div className="user">
        <img src={Profile} />
        <span>dee</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
