import React, { Component } from "react";
import "./Ingredients.css";

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        { id: 1, quantity: 1, size: "cup", name: "flour" },
        { id: 2, quantity: 0.5, size: "tsp", name: "salt" },
        { id: 3, quantity: 1, size: "", name: "chicken" },
        { id: 4, quantity: 2, size: "tbs", name: "eggs" }
      ]
    };
  }

  renderTableData() {
    return this.state.ingredients.map((ingredient, index) => {
      const { id, quantity, size, name } = ingredient; //destructuring
      return (
        <tr key={id}>
          <td>{quantity}</td>
          <td>{size}</td>
          <td>of</td>
          <td>{name}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="Ingredients">
        <h3>Ingredients</h3>
        <table id="ingredients">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Ingredients;
