import React, { Component } from "react";
import axios from "axios";
import "./AddNew.css";
import "./../../access/animations.css";

class AddNew extends Component {
  state = {
    name: "",
    description: ""
  };

  componentDidMount() {
    console.log(this.props);
  }

  newDataHandler = () => {
    const data = {
      name: this.state.name,
      description: this.state.description
    };
    axios.post("/add-new", data).then(response => {
      alert(response);
    });
  };

  render() {
    return (
      <div className="AddNew">
        <h1>Add new recipe</h1>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <label>Description</label>
        <textarea
          rows="10"
          value={this.state.description}
          onChange={event => this.setState({ description: event.target.value })}
        />
        <button onClick={this.newDataHandler}>Add New Recipe</button>
      </div>
    );
  }
}

export default AddNew;
