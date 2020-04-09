import React from "react";
import styled from "styled-components";

const Item = styled.div`
    color: black;
    font-size: 2rem;
        &.done {
            color: red;
        }
`;


const ToDo = props => {
  console.log("ToDo items:", props);
  return (
    <Item
      className={`todo${props.todo.done ? " done" : ""}`}
      onClick={() => props.toggleToDo(props.todo.id)}
    >
      <p>{props.todo.name}</p>
    </Item>
  );
};

export default ToDo;