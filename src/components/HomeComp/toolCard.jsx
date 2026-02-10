const ToolCard = ({ logos, percent, title }) => {
  return (
    <div className=" h-fit w-[15%] flex flex-col items-center gap-3">
      <div className="py-9 px-4 flex flex-col items-center gap-5 bg-gray-300 rounded-b-full rounded-t-full ">
        <img
          src={logos}
          alt=""
          className="h-24 w-24 rounded-full bg-white p-2"
        />
        <p className="font-bold text-2xl">{percent}</p>
      </div>
      <p className="text-xl text-textLightGrey font-bold">{title}</p>
    </div>
  );
};

export default ToolCard;
