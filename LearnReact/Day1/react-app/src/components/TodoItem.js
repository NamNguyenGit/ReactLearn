import React from "react";

const TodoItem = (props) => {
  const todo = props.todoProps;
  return (
    <p>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="">
            {todo}
          </input>
        </label>
        <button>Delete</button>
      </div>
      {todo}
    </p>
  );
};

export default TodoItem;
