import React from "react";
import "./Login.css";
import SignUp from "./../SignUp/SignUp";
import SignIn from "./../SignIn/SingIn";
import Info from "./../Info/Info";
import InfoExtend from "./../Info/IngoExtend";

function Login() {
  return (
    <div className="Login">
      <div className="Card">
        <div className="Image">
          <Info />
        </div>
        <div className="Form">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default Login;
