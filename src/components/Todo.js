import React from "react";

const ToDo = props => {
  console.log("ToDo Props:", props);
  return (
    <div
      className={`todo${props.todo.done ? " done" : ""}`}
      onClick={() => props.toggleToDo(props.todo.id)}
    >
      <p>{props.todo.name}</p>
    </div>
  );
};

export default ToDo;