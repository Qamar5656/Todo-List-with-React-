const TodoInput = ({ todo, setTodo, onAddTask }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onAddTask();
    }
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border p-2"
        placeholder="Enter a task..."
      />
      <button
        onClick={onAddTask}
        className="border bg-primary text-dark p-2 font-bold cursor-pointer ml-2"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
