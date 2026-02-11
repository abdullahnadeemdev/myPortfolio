import { useState } from "react";

const ToggleButton = ({ children, txt }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`bg-periwinkle rounded-xl text-pink h-[50px] flex items-center px-4 max-w-50 md:max-w-70 w-full relative `}
    >
      <button
        className="bg-main text-sm sm:text-base lg:text-xl rounded-xl h-[50px] px-2 absolute max-w-50 md:w-[70%] hover:cursor-pointer transition-all duration-500 ease-in-out"
        style={{
          /* Calculate position: (100% of parent) - (Button Width) */
          left: isSelected ? "calc(100% - 70%)" : "0px",
        }}
        onClick={() => setIsSelected(!isSelected)}
      >
        {txt}
      </button>
      <span className={`text-xs sm:text-sm lg:text-lg ml-auto`}>Click</span>
    </div>
  );
};

export default ToggleButton;
