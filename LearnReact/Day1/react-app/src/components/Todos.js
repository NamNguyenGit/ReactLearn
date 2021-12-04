import React, { Fragment, useState } from "react";
import AddTodo from "./Add";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const [todoStates, settodoStates] = useState([
    {
      id: uuidv4(),
      title: "Eat breakfast",
      status: false,
    },
    {
      id: uuidv4(),
      title: "Do homework",
      status: false,
    },
    {
      id: uuidv4(),
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

  const addtodo = (title) => {
    const newTodoss = [
      ...todoStates,
      {
        id: uuidv4(),
        title,
        status: false,
      },
    ];
    settodoStates(newTodoss);
  };

  return (
    <Fragment>
      <AddTodo addtodofunc={addtodo}></AddTodo>
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
