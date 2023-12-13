import Todo from "./Todo";

const TodosList = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.time !== id);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setTodos(filteredTodos);
  };

  return (
    <div className="flex flex-col gap-2">
      {todos?.map((todo) => {
        return (
          <Todo
            key={todo.time}
            todos={todos}
            setTodos={setTodos}
            id={todo.time}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodosList;
