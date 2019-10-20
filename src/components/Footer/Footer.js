import React from "react";
import "./Footer.css";
import logo from "../../img/logo-05.png";

function Footer() {
  return (
    <div className="Footer">
      <ul className="FooterItems">
        <li>About</li>
        <li>Recipes</li>
        <li>Profile</li>
      </ul>
      <img src={logo} alt="Logo" className="FooterLogo" />
      <div className="FooterCopyright">
        <p>Designed and created by Maja Kulpa, 2019</p>
        <p>&copy; All right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
