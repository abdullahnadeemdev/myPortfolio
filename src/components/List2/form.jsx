import { useState } from "react";

function FormSub() {
  const [fName, setName] = useState("Enter first name");
  const [lName, setLName] = useState("Enter last name");
  const [email, setEmail] = useState("abc@example.com");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleLName(e) {
    setLName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const para = document.getElementById("info");

    para.textContent = "Name: " + fName + "\n" + lName + " Email: " + email;

    setTimeout(() => {
      para.textContent = "";
    }, 5000);
  }
  return (
    <div className="form-container p-2 flex flex-col items-center gap-5">
      <h2 className="font-semibold text-3xl text-center">Input Form</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center bg-blue-300 w-100 py-4 rounded-lg"
      >
        <div className="form-group flex flex-col bg-blue-300 w-90 p-2 ">
          <label className="font-semibold ">First name:</label>
          <input
            className="border rounded-sm p-1 bg-gray-200"
            type="text"
            value={fName}
            onChange={handleName}
          />
        </div>

        <div className="form-group flex flex-col bg-blue-300 w-90 p-2 justify-center">
          <label className="font-semibold ">Last Name:</label>
          <input
            className="border rounded-sm p-1 bg-gray-200"
            type="text"
            value={lName}
            onChange={handleLName}
          />
        </div>

        <div className="form-group flex flex-col bg-blue-300 w-90 p-2 justify-center">
          <label className="font-semibold ">Email:</label>
          <input
            className="border rounded-sm p-1 bg-gray-200"
            type="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-100 px-3 w-70 mt-2 rounded-xl py-1 hover:cursor-pointer hover:bg-blue-700 hover:text-white hover:font-semibold"
        >
          Submit
        </button>
      </form>
      <p id="info"></p>
    </div>
  );
}

export default FormSub;
