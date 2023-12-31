import { useState, useRef } from "react";

const Todo = ({ todos, setTodos, id, todo, deleteTodo }) => {
  const [done, setDone] = useState(false);
  const [editedTodoValue, setEditedTodoValue] = useState(todo.task);
  const [editing, setEditing] = useState(false);

  const inputRef = useRef(null);
  const pRef = useRef(null);

  const toggleEditTodo = (id) => {
    if (editing) {
      const updatedTodos = todos.map((todo) =>
        todo.time === id ? { ...todo, task: editedTodoValue } : todo
      );

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    }
    setEditing((editing) => !editing);
  };

  const handleCheckBox = (event) => {
    if (event.target.checked) setDone(true);
    else setDone(false);
  };

  const handleEditChange = (e) => {
    setEditedTodoValue(e.target.value);
  };

  return (
    <div className="flex items-center justify-between gap-2 px-5 py-2 border-2 dark:border-[#5bedc1] dark:border border-black rounded-md dark:border-slate-600 dark:text-white">
      <div className="flex flex-row gap-2 ">
        <input
          type="checkbox"
          className="cursor-pointer"
          onChange={handleCheckBox}
        />
        <div className={"edit-div" + (done ? " line-through" : "")}>
          {editing ? (
            <input
              ref={inputRef}
              type="text"
              value={editedTodoValue}
              onChange={(e) => handleEditChange(e)}
              className="border-2 dark:border border-black outline-none rounded-sm dark:border-[#5bedc1] dark:bg-black "
            />
          ) : (
            <p ref={pRef} className="break-words ">
              {editedTodoValue}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-2 ">
        <img
          src={editing ? "save-icon.png" : "edit-icon.png"}
          alt="edit/save icon"
          className="w-5 cursor-pointer"
          onClick={() => toggleEditTodo(id)}
        />

        <img
          src="delete-icon.png"
          alt="delete"
          className="w-5 cursor-pointer "
          onClick={() => deleteTodo(id)}
        />
      </div>
    </div>
  );
};

export default Todo;
