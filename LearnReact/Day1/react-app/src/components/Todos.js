import React, { Fragment, useState } from "react";
import AddTodo from "./Add";
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

  const deletetodo = (id) => {
    const newTodos = todoStates.filter((todo) => todo.id !== id);
    settodoStates(newTodos);
  };

  return (
    <Fragment>
      <AddTodo></AddTodo>
      {todoStates.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todoProps={todo}
            markDonefunction={markDone}
            deleteTodofunction={deletetodo}
          />
        );
      })}
    </Fragment>
  );
};

export default Todos;
