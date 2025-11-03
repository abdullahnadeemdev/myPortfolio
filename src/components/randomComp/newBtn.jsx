import { useState } from "react";

function Btn({ Name }) {
  const [name, setName] = useState(Name);

  // function newName(e) {
  //   setName(e.target.value );
  // }

  return (
    <>
      <label htmlFor="input">Enter a name: </label>
      <input
        value={name}
        className="border-2 bg-gray-400 px-2"
        type="text"
        id="input"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button className="border-2 bg-gray-400">{name}</button>
    </>
  );
}
export default Btn;
