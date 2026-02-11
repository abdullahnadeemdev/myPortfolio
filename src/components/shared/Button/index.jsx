import React from "react";

const index = ({ children, className }) => {
  return (
    <button
      className={`border text-sm sm:text-base lg:text-xl px-3 py-3 rounded-xl text-pink hover:cursor-pointer w-52  md:w-[280px] 
        
        hover:bg-pink hover:text-main hover:duration-250 ${className}`}
    >
      {children}
    </button>
  );
};

export default index;
