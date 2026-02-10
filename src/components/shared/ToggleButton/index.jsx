import { useState } from "react";

const ToggleButton = ({ children, txt }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`bg-periwinkle rounded-xl text-pink h-[50px] flex items-center px-4 max-w-60 w-full relative `}
    >
      <button
        className="bg-main text-xs sm:text-sm lg:text-base rounded-xl h-[50px] px-2 absolute w-[60%] hover:cursor-pointer transition-all duration-500 ease-in-out"
        style={{
          /* Calculate position: (100% of parent) - (Button Width) */
          left: isSelected ? "calc(100% - 60%)" : "0px",
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
