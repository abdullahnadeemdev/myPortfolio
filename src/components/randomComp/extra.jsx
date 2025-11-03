/* <div> */
// const [form, setForm] = useState({
//   firstName: "Barbara",
//   lastName: "Hepworth",
//   email: "bhepworth@sculpture.com",
// });
//   function fName(e) {
//     setForm({ ...form, firstName: e.target.value });
//   }

//   function lName(e) {
//     setForm({ ...form, lastName: e.target.value });
//   }

//   function cEmail(e) {
//     setForm({ ...form, email: e.target.value });
//   }
//   <label>First Name: </label>
//   {/* <input value={form.firstName} type="text" onChange={(e)=>{setForm({...form,firstName:e.target.value});}} /> */}
//   <input value={form.firstName} type="text" onChange={fName} />

//   <label>Last Name: </label>
//   <input value={form.lastName} type="text" onChange={lName} />
//   <label>Email: </label>
//   <input value={form.email} type="email" onChange={cEmail} />

//   <h1>
//     {form.firstName} {form.lastName} {form.email}{" "}
//   </h1>

// </div>
// <>
//   <label>First Name: </label>
//   <input
//     value={person.name}
//     type="text"
//     onChange={(e) => {
//       setP({
//         ...person,
//         name: e.target.value,
//       });
//     }}
//   />

//   <label>Title: </label>
//   <input
//     value={person.artwork.title}
//     type="text"
//     onChange={(e) => {
//       setP({
//         ...person,
//         artwork: { ...person.artwork, title: e.target.value },
//       });
//     }}
//   />

//   <label>City Name: </label>
//   <input
//     value={person.artwork.city}
//     type="text"
//     onChange={(e) => {
//       setP({
//         ...person,
//         artwork: { ...person.artwork, city: e.target.value },
//       });
//     }}
//   />

//   <label htmlFor="img">Image: </label>
//   <img src={person.artwork.image} alt="casaBlanca" id="img" />

//   <p>
//     {person.name} {person.artwork.city} {person.artwork.title}
//   </p>

// const [person, setP] = useState({
//   name: "Niki de Saint Phalle",
//   artwork: {
//     title: "Blue Nana",
//     city: "Hamburg",
//     image: "https://i.imgur.com/Sd1AgUOm.jpg",
//   },
