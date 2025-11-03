import webOne from "../../../../../../../web phots/Portfolio-1.png";
import webTwo from "../../../../../../../web phots/Portfolio-2.png";
import webThree from "../../../../../../../web phots/WebsiteDash.png";
import Notes from "../../../../../../../web phots/notes-app.png";
import PortfolioCard from "./portfolioCard";

const MyPort = () => {
  return (
    <div className="p-10 h-fit flex flex-col items-stretch justify-around  bg-gray-200">
      <div className="flex flex-col items-start ">
        <span className="flex gap-1 items-center">
          <p className="text-2xl font-bold text-persian">-</p>
          <p>MyPortfolio</p>
        </span>
        <span className="font-bold text-4xl flex gap-2 items-center">
          <p>My Latest</p>
          <p className="font-light text-persian">Projects</p>
        </span>
      </div>
      <div className="mt-8 flex flex-wrap justify-around gap-6 items-center ">
        <PortfolioCard title="Landing Page" images={webOne} />
        <PortfolioCard title="Landing Page" images={webTwo} />
        <PortfolioCard title="Website Dashboard" images={webThree} />
        <PortfolioCard title="Notes App" images={Notes} />
      </div>
    </div>
  );
};

export default MyPort;
