import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
  const addtodo = props.addtodofunc;

  const [title, setTitle] = useState("");

  const addTodostyle = {
    display: "flex",
  };

  const addtodoinputstyle = {
    flex: "10",
    padding: "5px",
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const addSingletodo = (event) => {
    event.preventDefault();

    if (title !== "") {
      addtodo(title);
      setTitle("");
    }
  };

  return (
    <form style={addTodostyle} onSubmit={addSingletodo}>
      <input
        style={addtodoinputstyle}
        type="text"
        name="title"
        value={title}
        placeholder="Title..."
        onChange={changeTitle}
      ></input>
      <input className="btn" type="submit" value="Add"></input>
    </form>
  );
};

AddTodo.propTypes = {
  addtodofunc: PropTypes.func.isRequired,
};

export default AddTodo;
