import React from "react";

const index = ({ children }) => {
  return (
    <button className="border px-3 py-3 rounded-xl text-pink hover:cursor-pointer hover:bg-pink hover:text-main hover:duration-250">
      {children}
    </button>
  );
};

export default index;
