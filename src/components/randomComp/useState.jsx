import { useState } from "react";

function State() {
  var [age, setAge] = useState(2);
  let [text, setText] = useState("Hello");
  function handleClick(e) {
    setAge(e.target.value);
    console.log(age);
  }

  //   function setChange(e) {
  //     setText(e.target.value);
  //   }

  return (
    <>
      <div>
        <h3 id="heyyy">Set age:</h3>
        <input type="number" value={age} onChange={handleClick} />
      </div>

      {/* <div>
        <input type="text" value={text} onChange={setChange} />
        <h2>
          Hello: {text}, You are {age} years old.
        </h2>

        <button
          onClick={() => {
            setText("Hello");
          }}
        >
          Reset
        </button>
      </div> */}
    </>
  );
}

export default State;
