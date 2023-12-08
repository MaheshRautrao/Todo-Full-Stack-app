import { useState } from "react";
import { useEffect } from "react";
import Todo from "./components/Todo";
import ThemeBox from "./components/ThemeBox";
import CreateTodoBox from "./components/CreateTodoBox";

function App() {
  const localTheme = localStorage.theme;

  const [theme, setTheme] = useState(localTheme);
  const [themeImage, setThemeImage] = useState(
    localTheme === "dark" ? "light-mode" : "night-mode"
  );
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark")
      document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setThemeImage("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      setThemeImage("night-mode");
      localStorage.setItem("theme", "light");
    }
  };

  const createTodo = () => {
    if (task === "") return;
    const todo = { task };
    setTodos((prev) => [...prev, todo]);
    setTask("");
  };

  const handleTaskInput = (event) => {
    setTask(event.target.value);
  };

  const handleEnterFromInput = (event) => {
    if (event.keyCode === 13) createTodo();
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo, ind) => ind !== id);
    console.log(filteredTodos);
    setTodos(filteredTodos);
  };

  return (
    <>
      <div className="flex flex-col items-center h-full min-h-screen dark:bg-[#414141]">
        <div className="flex flex-col gap-5 p-4 ">
          <ThemeBox themeImage={themeImage} handleTheme={handleTheme} />
          <div className="flex flex-col gap-3 ">
            <CreateTodoBox
              task={task}
              handleTaskInput={handleTaskInput}
              handleEnterFromInput={handleEnterFromInput}
              createTodo={createTodo}
            />
            <div className="flex flex-col gap-2">
              {todos.map((todo, ind) => {
                console.log("i am rendered");
                return (
                  <Todo
                    key={ind}
                    id={ind}
                    todo={todo}
                    deleteTodo={deleteTodo}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
