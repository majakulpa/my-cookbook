import React from "react";
import "./../Login/Login.css";

function SignIn() {
  return (
    <div className="FormContainer">
      <h2 className="FormTitle LogIn">Log in</h2>
      <form className="Form">
        <label for="email" className="Label">
          Email address
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="you@example.com"
          className="Input"
        />
        <label for="password" className="Label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          className="Input"
        />

        <input
          type="checkbox"
          id="KeepLogged"
          name="KeepLogged"
          value="KeepLogged"
        />
        <label for="KeepLogged">Keep me logged in</label>

        <input type="submit" value="Log in" className="SubmitButton" />
      </form>
      <p className="FormText">
        Don't have an account? <a href="#">Sign up!</a>
      </p>
    </div>
  );
}

export default SignIn;
