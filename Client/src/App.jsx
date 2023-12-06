import { useState } from "react";
import Todo from "./components/Todo";
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [themeImage, setThemeImage] = useState("night-mode");
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setThemeImage("light-mode");
    } else {
      setTheme("light");
      setThemeImage("night-mode");
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

  return (
    <>
      <div className="flex flex-col items-center h-full min-h-screen dark:bg-[#414141]">
        <div className="flex flex-col gap-5 p-4 ">
          <div className="py-5">
            <div className="flex justify-end ">
              <div className="p-1 bg-gray-100 rounded-full dark:bg-black">
                <img
                  src={`${themeImage}.png`}
                  alt="white mode"
                  className="cursor-pointer w-7"
                  onClick={handleTheme}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="flex gap-2">
              <input
                type="text"
                value={task}
                onChange={handleTaskInput}
                className="px-2 py-1 text-black dark:text-white dark:border border-2 border-black rounded-md outline-none dark:border-[#5bedc1] dark:bg-black w-60"
                placeholder="Write your todo"
              />
              <button
                onClick={createTodo}
                className="
              px-4 py-1.5 
               text-white
                hover:bg-[#4ab696]
                 bg-black
                  rounded-lg 
                  dark:text-black
                   dark:bg-[#5bedc1]
                    dark:hover:bg-[#52ddb3cb]"
              >
                Add Todo
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {todos.map((todo, ind) => (
                <Todo key={ind} task={todo.task} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
