import React, { useEffect, useState } from "react";

// Utility to generate unique IDs
const generateId = () => Date.now() + Math.random().toString(36).substring(2);

const Todolist = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search
  const [debounceInput, setDebounceInput] = useState(todoText);

  // Add new todo
  const handleAdd = () => {
    if (todoText.trim() === "") {
      alert("Empty Task is not allowed ");
      return;
    }

    const newTodo = {
      id: generateId(),
      text: todoText.trim(),
    };

    setTodos([...todos, newTodo]);
    setTodoText("");
  };

  // Update todo by ID
  const handleUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: editedText.trim() || todo.text }
          : todo
      )
    );
    setEditingId(null);
    setEditedText("");
  };

  // Delete todo by ID
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Handle Enter (add) vs Shift+Enter (newline)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  };

  //Search Todos when user stop typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceInput(searchQuery);
    }, 300); // 300ms debounce

    return () => {
      clearTimeout(handler); // cleanup on input change
    };
  }, [searchQuery]);

  //search filter to search todo from todos
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(debounceInput.toLowerCase())
  );

  return (
    <>
      <h2 className="container text-center py-5 text-3xl font-bold mb-4">
        Todo List
      </h2>
      <div className="container py-5">
        {/* Search Bar */}
        <div className="pr-48 mb-4 container py-3 flex items-center justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 w-1/2 py-3  focus:outline-blue-600 border-2"
            placeholder="Search todos..."
          />
        </div>

        {/* Add Todo */}
        <div className="flex justify-center items-center mb-4">
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border-2 p-2 w-1/2 focus:outline-blue-500"
            placeholder="Enter a task..."
          />
          <button
            onClick={handleAdd}
            className="ml-2 border bg-blue-500 text-white p-2 font-bold cursor-pointer"
          >
            Add Todo
          </button>
        </div>

        {/* Todo List */}
        <ul>
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className="border my-2 p-2 font-medium flex justify-between items-center"
              >
                {/* To update the task of todo list */}
                {editingId === todo.id ? (
                  <div className="flex w-full items-center">
                    <input
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="border p-1 flex-grow"
                    />
                    <button
                      onClick={() => handleUpdate(todo.id)}
                      className="ml-2 border px-2 py-1 bg-green-500 text-white"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="ml-2 border px-2 py-1"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <span>{todo.text}</span>
                    <div className="flex gap-2 ml-2">
                      {/* Edit Button */}
                      <button
                        onClick={() => {
                          setEditingId(todo.id);
                          setEditedText(todo.text);
                        }}
                        className="border px-2 py-1 bg-yellow-400"
                      >
                        Edit
                      </button>
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(todo.id)}
                        className="border px-2 py-1 bg-red-500 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))
          ) : (
            //   If no record found display following line
            <p className="text-gray-500 mt-4 flex items-center justify-center">
              No matching tasks found.
            </p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Todolist;
