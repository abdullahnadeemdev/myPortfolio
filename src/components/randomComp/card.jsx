function Card(props) {
  //   const name = props.name;
  //   const pr = props.price;
  //   const imge = props.image;
  //   const { name, price, image } = props;
  return (
    <>
      <div className="flex flex-col items-center h-fit mt-2 p-2 bg-textLightGrey border-2 rounded-md w-fit">
        <img
          src={
            props?.image ||
            "https://plus.unsplash.com/premium_photo-1670678203548-f6ad7b39ef11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="product pic"
          className="h-20 w-20 rounded-sm"
        />
        <p>{props?.info?.name2 ? props.info.name2 : "Guest"}</p>
        <h3 className="font-bold">{props?.info?.price || "NONE"}</h3>
      </div>
    </>
  );
}

export default Card;

/* <div className="flex flex-cols mx-2 gap-2">
        <Card
          info={{ name2: "Rome", price: "$20" }}
          image="https://i.imgur.com/v0FZWLQ.jpeg"
        />
        <Card
          info={{ name2: "Pencil drawing", price: "$200" }}
          image="https://i.imgur.com/A3AfLzd.jpeg"
        />
        <Card
          info={{ name2: "Color drawing", price: "$300" }}
          image="https://i.imgur.com/R4hC1C8.jpeg"
        />

        <Card info={{ name2: "Color drawing", price: "$700" }} />

        <Card />
      </div> */
