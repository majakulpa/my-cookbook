import React from "react";
import Recipe from "../Recipe/Recipe";
import Ingredients from "../Ingredients/Ingredients";

import "./RecipeScreen.css";

function Main() {
  return (
    <div className="RecipeScreen">
      <Recipe />
      <Ingredients />
    </div>
  );
}

export default Main;
