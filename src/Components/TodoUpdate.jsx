import React from "react";

const TodoUpdate = ({ todo, setTodo, todos, setTodos, task }) => {
  const handleUpdate = () => {
    // alert("update button clicked");
    setTodos([...todos, todo]);
    setTodo(todo);
  };
  return (
    <>
      {todos.map((task, index) => (
        <li key={index} className="border p-2 my-2 flex justify-between">
          {editingIndex === index ? (
            <>
              <input
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="border mr-2"
              />
              <button
                onClick={() => handleUpdate(index)}
                className="border px-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditingIndex(null)}
                className="ml-2 border px-2"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              {task}
              <span
                className="border px-2 cursor-pointer"
                onClick={() => {
                  setEditingIndex(index);
                  setEditedText(task);
                }}
              >
                Update
              </span>
            </>
          )}
        </li>
      ))}
    </>
  );
};

export default TodoUpdate;
