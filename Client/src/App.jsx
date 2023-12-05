import { useState } from "react";
import Todo from "./components/Todo";
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [themeImage, setThemeImage] = useState("night-mode");

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

  return (
    <>
      <div className="flex flex-col items-center h-screen dark:bg-gray-800">
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
                className="px-2 py-1 text-black border-2 border-black rounded-md outline-none dark:border-slate-600 w-60"
                placeholder="Write your todo"
              />
              <button className="px-4 py-1.5  text-white hover:bg-green-400 bg-black rounded-lg  dark:text-black dark:bg-white dark:hover:bg-green-400">
                Add Todo
              </button>
            </div>
            <div>
              <Todo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
