import React from "react";

class ToDoForm extends React.Component {
  // Constructor with state
  constructor() {
    super(); // gives access to React.Component
    this.state = {
      toDo: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("update", this.state.item);
  };

  // class property to submit form
  submitToDo = e => {
    e.preventDefault();

    this.setState({ toDo: "" });
    this.props.addToDo(e, this.state.toDo);
  };

  render() {
    console.log("list", this.props);
    return (
      <form onSubmit={this.submitToDo}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ToDoForm;
