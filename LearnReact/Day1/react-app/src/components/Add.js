import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
  const [title, setTitle] = useState();

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

  return (
    <form style={addTodostyle}>
      <input
        style={addtodoinputstyle}
        type="text"
        name="title"
        placeholder="Title..."
        onChange={changeTitle}
      ></input>
      <input className="btn" type="submit" value="Add"></input>
    </form>
  );
};

AddTodo.propTypes = {};

export default AddTodo;
