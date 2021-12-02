import React from "react";
import { Button } from "reactstrap";
const TodoItem = (props) => {
  const todo = props.todoProps;
  //Style
  const todoItemStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: todo.status ? "line-through" : "none",
  };

  const deletebtn = {
    background: "#ff0000",
    padding: "5px 9px",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    float: "right",
  };

  //return
  return (
    <p style={todoItemStyle}>
      <input type="checkbox" />
      {todo.title}
      <Button style={deletebtn}>Delete</Button>
    </p>
  );
};

export default TodoItem;
