import { useState } from "react";
import Button from "./btn.jsx";

function Item({ item, todos, setTodos }) {
  const [edit, setEdit] = useState(false);
  const [temTitle, setTitle] = useState("");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleEdit() {
    setEdit(true);
    setTitle(item?.title);
  }

  function handleSave() {
    const updatedTodos = todos.map((todo) =>
      todo.id === item.id ? { ...todo, title: temTitle } : { ...todo }
    );
    // console.log(">>>>>>>>>>>>>>>", updatedTodos);
    setTodos(updatedTodos);
    setEdit(false);
  }

  function handleClick() {
    const newTodos = (prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, done: !todo.done } : todo
      );

    setTodos(newTodos);
  }

  function handleDelete() {
    const newTodos = (prevTodos) =>
      prevTodos.filter((todo) => todo.id !== item.id);

    setTodos(newTodos);
  }

  return (
    <>
      <li
        id={item?.id}
        className="flex gap-2 items-center bg-gray-300 w-max p-2 rounded-md m-2"
      >
        <>
          {edit ? (
            <input
              type="text"
              value={temTitle}
              onChange={handleChange}
              className="border-1 px-2"
            />
          ) : (
            <>
              <input type="checkbox" onClick={handleClick} />
              <p
                className="font-semibold italic"
                style={item.done ? { textDecoration: "line-through" } : {}}
              >
                {item?.title}
              </p>
            </>
          )}

          <div className="flex gap-2 items-center justify-center ">
            {edit ? (
              <Button func={handleSave} purpose={"Save"} clr={"#3dfc03"} />
            ) : (
              <Button func={handleEdit} purpose={"Edit"} clr={"#fcba03"} />
            )}

            <Button func={handleDelete} purpose={"Delete"} clr={"#f52027"} />
          </div>
        </>
      </li>
    </>
  );
}
export default Item;
