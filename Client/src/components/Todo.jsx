const Todo = () => {
  return (
    <div className="flex items-center justify-between gap-2 px-5 py-2 border-2 border-black rounded-md ">
      <div className="flex flex-row gap-2 ">
        <input type="checkbox" className="cursor-pointer" />
        <div className="">I want to go to market</div>
      </div>

      <div className="flex gap-2 ">
        <div>
          <img
            src="delete-icon.png"
            alt="delete"
            className="w-5 cursor-pointer"
          />
        </div>
        <div>
          <img src="edit-icon.png" alt="edit" className="w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
