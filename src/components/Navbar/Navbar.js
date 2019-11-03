import React from "react";
import "./Navbar.css";
import MyRecipes from "./../../components/MyRecipes/MyRecipes";
import AddNew from "./../../components/AddNew/AddNew";
import Main from "./../Main/Main";
import { Route, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <ul className="NavbarItems">
          <li>
            <NavLink to="/" exact className="Link">
              My recipes
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-new" className="Link">
              Add new
            </NavLink>
          </li>
        </ul>
        <form className="Search">
          <input type="text" value="Search" className="SearchBox" />
        </form>
      </div>
      <Route path="/" exact component={MyRecipes} />
      <Route path="/add-new" component={AddNew} />
      <Route path="/:id" exact component={Main} />
    </div>
  );
}

export default Navbar;
