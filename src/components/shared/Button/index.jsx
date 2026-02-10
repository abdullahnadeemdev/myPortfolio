import React from "react";

const index = ({ children, className }) => {
  return (
    <button
      className={`border text-xs sm:text-sm lg:text-lg px-3 py-3 rounded-xl text-pink hover:cursor-pointer hover:bg-pink hover:text-main hover:duration-250 ${className}`}
    >
      {children}
    </button>
  );
};

export default index;
