import Item from "./item.jsx";

function ListItems({ todos, setTodos }) {
  return (
    <>
      <ol>
        {todos && todos.length > 0 ? (
          todos.map((item, index) => (
            <Item key={index} item={item} setTodos={setTodos} todos={todos} />
          ))
        ) : (
          <p>No items available</p>
        )}
      </ol>
    </>
  );
}
export default ListItems;
