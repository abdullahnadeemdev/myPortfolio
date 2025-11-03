import { useState } from "react";

function Counter() {
  const [count, setC] = useState(0);

  function inc() {
    setC(count + 1);
  }
  function dec() {
    if (!count <= 0) {
      setC(count - 1);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">The count is: {count}</h1>
        <span>
          <button onClick={inc} className="border px-2 py-1 mx-2 bg-green-400">
            Increment
          </button>
          <button className="border px-2 py-1 mx-2 bg-red-400" onClick={dec}>
            Decrement
          </button>
        </span>
      </div>
    </>
  );
}
export default Counter;
