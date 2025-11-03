const Card = ({ images, head }) => {
  return (
    <div className=" w-fit border-1 bg-gray-300 rounded-2xl">
      <div className="base flex px-4 py-8 flex-col gap-4 ">
        <span className="p-2">
          <img src={images} alt="" />
        </span>
        <span className="font-bold text-main text-2xl">{head}</span>
        <span className="text-sm text-gray-500 text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Illum,Lorem ipsum dolor, sit amet consectetur adipisicing.
          beatae?
        </span>
        <button className="text-main w-fit  pr-4 py-2 rounded-4xl hover:cursor-pointer hover:pl-3 hover:bg-main hover:text-pink">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
