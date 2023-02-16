import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Jibber</span>
        <span className="title">Register</span>
        <form>
          <input type="text" className="" placeholder="display name" />
          <input type="email" className="" placeholder="email" />
          <input type="password" className="" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
