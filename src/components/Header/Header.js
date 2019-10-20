import React from "react";
import "./Header.css";
import logo from "../../img/logo-04.png";

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Logo" className="Logo" />
      <ul className="List">
        <li>Recipes</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}

export default Header;
