import React, { Fragment, useState } from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todoStates, settodoStates] = useState([
    "Eat breakfast",
    "Do homework",
    "Go to sleep",
  ]);
  //   const allTodos = [];

  //   for (let todo of todoStates) {
  //     allTodos.push(<p>{todo}</p>);
  //   }
  return (
    <Fragment>
      {todoStates.map((todo) => {
        return <TodoItem todoProps={todo} />;
      })}
    </Fragment>
  );
};

export default Todos;
