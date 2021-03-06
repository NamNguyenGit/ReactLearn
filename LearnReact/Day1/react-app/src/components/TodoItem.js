import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
const TodoItem = (props) => {
  const todo = props.todoProps;
  const markComplete = props.markDonefunction;
  const deleteTodo = props.deleteTodofunction;
  //Style
  const todoItemStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: todo.completed ? "line-through" : "none",
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
      <input
        type="checkbox"
        onChange={markComplete.bind(this, todo.id)}
        checked={todo.completed}
      />
      {todo.title}
      <Button onClick={deleteTodo.bind(this, todo.id)} style={deletebtn}>
        Delete
      </Button>
    </p>
  );
};

//PropTypes
TodoItem.propTypes = {
  todoProps: PropTypes.object.isRequired,
  markDonefunction: PropTypes.func.isRequired,
  deleteTodofunction: PropTypes.func.isRequired,
};

export default TodoItem;
