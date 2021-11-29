import React, { Fragment, useState } from "react";

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
        return <p>{todo}</p>;
      })}
    </Fragment>
  );
};

export default Todos;
