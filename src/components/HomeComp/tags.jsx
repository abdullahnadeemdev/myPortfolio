import React from "react";

const Tags = ({ clrBg, clr, title }) => {
  return (
    <div
      className="px-2 py-1 border-1 border-white w-max font-semibold rounded-full text-center"
      style={{ background: clrBg, color: clr }}
    >
      {title}
    </div>
  );
};

export default Tags;
