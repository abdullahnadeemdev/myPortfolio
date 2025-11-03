import List from "./list.jsx";

function FetchApi({ userData }) {
  return (
    <div className="p-2">
      <h1 className="font-bold text-4xl text-center mb-3 underline">
        <i>Client List</i>
      </h1>
      {userData && userData.length > 0 ? (
        userData.map((item, index) => <List item={item} key={index} />)
      ) : (
        <p>User list is empty</p>
      )}
    </div>
  );
}
export default FetchApi;
