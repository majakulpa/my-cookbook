import React from "react";
import "./Login.css";
import SignUp from "./../SignUp/SignUp";
import SignIn from "./../SignIn/SingIn";
import Info from "./../Info/Info";
import InfoExtend from "./../Info/IngoExtend";
import Logo from "./../../img/logo-02.png";

function Login() {
  return (
    <div className="Login">
      <div className="Card">
        <div className="Image">
          <Info />
        </div>
        <div className="FormCard">
          <img src={Logo} alt="Logo" className="LogoDark" />
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export default Login;
