import React, { Fragment, useState } from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todoStates, settodoStates] = useState([
    {
      id: 1,
      title: "Eat breakfast",
      status: false,
    },
    {
      id: 2,
      title: "Do homework",
      status: false,
    },
    {
      id: 3,
      title: "Go to sleep",
      status: false,
    },
  ]);
  //   const allTodos = [];

  //   for (let todo of todoStates) {
  //     allTodos.push(<p>{todo}</p>);
  //   }

  const markDone = (id) => {
    const newTodo = todoStates.map((todo) => {
      if (todo.id === id) todo.status = !todo.status;
      return todo;
    });

    settodoStates(newTodo);
  };

  return (
    <Fragment>
      {todoStates.map((todo) => {
        return <TodoItem todoProps={todo} markDonefunction={markDone} />;
      })}
    </Fragment>
  );
};

export default Todos;
