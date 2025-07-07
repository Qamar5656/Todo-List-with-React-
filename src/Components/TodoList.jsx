import React from "react";
import TodoItem from "./TodoUpdate";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
