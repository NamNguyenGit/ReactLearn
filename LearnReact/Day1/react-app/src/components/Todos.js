import React, { Fragment, useState, useEffect } from "react";
import AddTodo from "./Add";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Todos = () => {
  const [todoStates, settodoStates] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        // console.log(res.data);
        settodoStates(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getTodos();
  }, []);
  //   const allTodos = [];

  //   for (let todo of todoStates) {
  //     allTodos.push(<p>{todo}</p>);
  //   }

  const markDone = (id) => {
    const newTodo = todoStates.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    settodoStates(newTodo);
  };

  const deletetodo = async (id) => {
    try {
      await axios.delete("https://jsonplaceholder.typicode.com/todos/${id}");
      const newTodos = todoStates.filter((todo) => todo.id !== id);
      settodoStates(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addtodo = async (title) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title,
          completed: false,
        }
      );
      const newtodo = [...todoStates, res.data];
      settodoStates(newtodo);
    } catch (error) {
      console.log(error.message);
    }
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
