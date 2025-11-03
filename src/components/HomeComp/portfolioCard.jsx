import Tags from "./tags";

const PortfolioCard = ({ images, title }) => {
  return (
    <div className="h-fit bg-white rounded-2xl p-4 w-fit shadow-xl">
      <img src={images} alt="" className="h-[30rem] w-[30rem] rounded-2xl" />
      <div className="flex gap-2 mt-4">
        <Tags title="UI/UX Design" clr="#002A32" clrBg="#1B998B" />
        <Tags title="Responsive" clr="#002A32" clrBg="#1B998B" />
        <Tags title="Slides" clr="#002A32" clrBg="#1B998B" />
      </div>
      <p className="text-2xl font-bold mt-4">{title}</p>
    </div>
  );
};

export default PortfolioCard;
