const CreateTodoBox = ({
  task,
  handleTaskInput,
  handleEnterFromInput,
  createTodo,
}) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={task}
        onChange={handleTaskInput}
        className="px-2 py-1 text-black dark:text-white dark:border border-2 border-black rounded-md outline-none dark:border-[#5bedc1] dark:bg-black w-60"
        placeholder="Write your todo"
        onKeyUp={handleEnterFromInput}
      />
      <button
        onClick={createTodo}
        className="px-4 py-1.5 text-white hover:bg-[#4ab696] bg-black rounded-lg dark:text-black dark:bg-[#5bedc1] dark:hover:bg-[#52ddb3cb]"
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodoBox;
