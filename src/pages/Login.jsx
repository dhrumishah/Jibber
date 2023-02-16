import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Jibber</span>
        <span className="title">Login</span>
        <form>
          <input type="email" className="" placeholder="email" />
          <input type="password" className="" placeholder="password" />

          <button>Sign in</button>
        </form>
        <p>You don't have an account? Sign up!</p>
      </div>
    </div>
  );
};

export default Login;
