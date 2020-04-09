import React from "react";
import { Button, FormControl } from '@material-ui/core';

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
          name="toDo"
          value={this.state.toDo}
          onChange={this.handleChanges}
        />
        <Button color="primary" size="small" type="submit">Add Something To Do</Button>
      </form>
    );
  }
}

export default ToDoForm;
