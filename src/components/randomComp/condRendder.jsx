function Item({ name, isPacked }) {
  return (
    <li
      className={`flex items-center justify-between px-4 py-2 rounded-md shadow-sm mb-2 
        ${
          isPacked
            ? "bg-green-100 text-green-700 border border-green-300"
            : "bg-red-100 text-red-700 border border-red-300"
        }`}
    >
      <span className={isPacked ? "line-through" : ""}>{name}</span>
      {isPacked && <span className="ml-2">✅</span>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section className="max-w-md h-fit  mx-auto mt-10 p-6 bg-purp rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
        🚀 Sally Ride&apos;s Packing List
      </h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={false} name="Helmet with a golden leaf" />
        <Item isPacked={true} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// if (!isPacked) {
//   return <li className="item">{name} </li>;
// } else {
//   return <li className="item">{name} ✅</li>;
// }
// return (
//   <li className="item">{isPacked ? <del>{name + " ✅"}</del> : name} </li>
// );
