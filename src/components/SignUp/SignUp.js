import React from "react";
import "./../Login/Login.css";

function SignUp() {
  return (
    <div className="FormContainer">
      <h2 className="FormTitle">Sign up</h2>
      <form className="Form">
        <label for="yourname" className="Label">
          Your name
        </label>
        <input
          type="text"
          id="yourname"
          name="yourname"
          placeholder="Jessica Smith"
          className="Input"
        />
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
        <label for="passwordConfirm" className="Label">
          Confirm password
        </label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="Repeat your password"
          className="Input"
        />
        <input type="submit" value="Sign up" className="SubmitButton" />
      </form>
      <p className="FormText">
        Already have an account? <a href="#">Log in!</a>
      </p>
    </div>
  );
}

export default SignUp;
