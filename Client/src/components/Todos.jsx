import { useState, useEffect } from "react";
import CreateTodoBox from "./CreateTodoBox";
import TodosList from "./TodosList";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos") !== null)
      setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  return (
    <div className="flex flex-col gap-3 ">
      <CreateTodoBox todos={todos} setTodos={setTodos} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todos;
