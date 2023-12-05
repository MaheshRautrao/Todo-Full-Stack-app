import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-white ">
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-2">
            <input
              type="text"
              className="p-1 text-black border-2 border-black rounded-md outline-none w-60"
              placeholder="Write your todo"
            />
            <button className="px-4 py-1.5 text-white bg-black rounded-lg">
              Add Todo
            </button>
          </div>
          <div>
            <Todo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
