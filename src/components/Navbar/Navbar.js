import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="NavbarItems">
        <li>My recipes</li>
        <li>Add new</li>
      </ul>
      <form className="Search">
        <input type="text" value="Search" className="SearchBox" />
      </form>
    </div>
  );
}

export default Navbar;
