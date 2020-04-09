// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import { Button } from '@material-ui/core';

import ToDo from "./Todo";

const ToDoList = props => {
  console.log("ToDo List Props: ", props);
  return (
    <div className="todo-list">
      {props.todo.map(todo => (
        <ToDo key={todo.id} todo={todo} toggleToDo={props.toggleToDo} />
      ))}
      <Button className="clear-btn" variant="contained" color="secondary" size="small" onClick={props.clearDone}>
        Clear ToDo List
      </Button>
    </div>
  );
};

export default ToDoList;