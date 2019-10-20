import React, { useState } from "react";
import "./Ingredients.css";

const _ingredients = [
  {
    quantity: 1,
    cup: "tsp",
    name: "salt"
  },
  {
    quantity: 1.5,
    cup: "tsp",
    name: "pepper"
  },
  {
    quantity: 2,
    cup: "l",
    name: "water"
  },
  {
    quantity: 0.5,
    cup: "",
    name: "Chicken"
  }
];

function Ingredients() {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="Ingredients">
      <h3>Ingredients</h3>
      <table>
        <tr>
          <td onClick={() => setQuantity(quantity + 1)}>{quantity}</td>
          <td>tsp</td>
          <td>salt</td>
        </tr>
        <tr>
          <td>2</td>
          <td>tbs</td>
          <td>pepper</td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td>salt</td>
        </tr>
        <tr>
          <td>2.5</td>
          <td>l</td>
          <td>water</td>
        </tr>
        <tr>
          <td>0.5</td>
          <td></td>
          <td>chicken</td>
        </tr>
      </table>
    </div>
  );
}

export default Ingredients;
