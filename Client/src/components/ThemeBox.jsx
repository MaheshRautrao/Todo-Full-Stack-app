const ThemeBox = ({ themeImage, handleTheme }) => {
  return (
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
  );
};

export default ThemeBox;
