import Todo from "./Todo";

const TodosList = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo, ind) => ind !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo, ind) => {
        return <Todo key={ind} id={ind} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
};

export default TodosList;
