function List({ item }) {
  const {
    address: {
      street: str,
      suite: suit,
      city: cit,
      zipcode: zip,
      geo: { lat: l, lng: ln },
    },
  } = item;
  const {
    company: { name: cName, catchPhrase: cPhrase, bs: bs },
  } = item;
  const {
    id: d,
    name: name,
    username: uName,
    email: email,
    phone: ph,
    website: web,
  } = item;

  return (
    <ol
      id={item?.id}
      className="mb-2 grid grid-cols-3 gap-2 rounded-lg bg-blue-300 border-2 p-2"
    >
      <li className="">
        <b>Name: </b> {`${name}`} <br /> <b> Email: </b>
        {`${email}`}
      </li>

      <li className="">
        <b>Phone: {`${ph}`}</b>
        <br />
        <b>Address:- </b>
        {`
          Street: ${str} Apartment: ${suit} 
          City: ${cit} Zipcode: ${zip}
          Latitude: ${l} Longitudes: ${ln}`}
      </li>
      <li>
        <b>Company: </b>
        {`${cName}`}
        <br />
        <b>Website: </b> ${web}
        <br />
        <b>Catchphrase: </b>
        {`${cPhrase} - ${bs}`}
      </li>
    </ol>
  );
}

export default List;

//  function List({ item }) { item.map((item) => { const { address: { street: str, suite: suit, city: cit, zipcode: zip, geo: { lat: l, lng: ln }, }, } = item; const { company: { name: cName, catchPhrase: cPhrase, bs: bs }, } = item; const { id: d, name: name, username: uName, email: email, phone: ph, website: web, } = item; console.log("ddddddddddddddddddd", item); return ( //   ( //   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa", userData) <ul> <li id={item?.id}> {`ID: ${d} Name: ${name} UserName:${uName} Email: ${email}`} </li> <li id={item?.id}> {` Street: ${str} Apartment: ${suit} City: ${cit} Zipcode: ${zip} Latitude: ${l} Longitudes: ${ln}`} </li> <li id={item?.id}> {`Phone: ${ph} Website: ${web} Company: ${cName} - ${cPhrase} - ${bs}`} </li> </ul> //   ) ); }); } export default List;
