import { useState } from "react";
import { useEffect } from "react";
import Todos from "./components/Todos";
import ThemeBox from "./components/ThemeBox";

function App() {
  const localTheme = localStorage.theme;
  const [theme, setTheme] = useState(localTheme);
  const [themeImage, setThemeImage] = useState(
    localTheme === "dark" ? "light-mode" : "night-mode"
  );

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

  return (
    <>
      <div className="flex flex-col items-center h-full min-h-screen dark:bg-[#414141]">
        <div className="flex flex-col gap-5 p-4 ">
          <ThemeBox themeImage={themeImage} handleTheme={handleTheme} />
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
