import { useState } from "react";
import CreateTodoBox from "./CreateTodoBox";
import TodosList from "./TodosList";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex flex-col gap-3 ">
      <CreateTodoBox setTodos={setTodos} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todos;
