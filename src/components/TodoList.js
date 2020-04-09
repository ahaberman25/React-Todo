// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import ToDo from "./Todo";

const ToDoList = props => {
  console.log("ToDo List Props: ", props);
  return (
    <div className="todo-list">
      {props.todo.map(todo => (
        <ToDo key={todo.id} todo={todo} toggleToDo={props.toggleToDo} />
      ))}
      <button className="clear-btn" onClick={props.clearDone}>
        Clear ToDo List
      </button>
    </div>
  );
};

export default ToDoList;