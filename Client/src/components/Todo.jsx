import { useState } from "react";

const Todo = ({ todo, id, deleteTodo }) => {
  const [done, setDone] = useState(false);

  const handleCheckBox = (event) => {
    if (event.target.checked) setDone(true);
    else setDone(false);
  };

  return (
    <div className="flex items-center justify-between gap-2 px-5 py-2 border-2 dark:border-[#5bedc1] dark:border border-black rounded-md dark:border-slate-600 dark:text-white">
      <div className="flex flex-row gap-2 ">
        <input
          type="checkbox"
          className="cursor-pointer"
          onChange={handleCheckBox}
        />
        <div className={done ? " line-through" : ""}>
          <p className="break-words">{todo.task}</p>
        </div>
      </div>

      <div className="flex gap-2 ">
        <img src="edit-icon.png" alt="edit" className="w-5 cursor-pointer" />
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
