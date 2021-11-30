import React from "react";

const TodoItem = (props) => {
  const todo = props.todoProps;
  return <p> {todo}</p>;
};

export default TodoItem;
