import Card from "./card";
import Laptop from "../../assets/ui-laptop.png";
import Pen from "../../assets/pen-tool.png";
import Web from "../../assets/web-design.png";

const Services = () => {
  return (
    <div className="m-10 h-screen flex flex-col justify-center  font-serif">
      <div>
        <span className="flex gap-1 items-center text-normal pl-15">
          <p className="text-2xl font-bold text-persian">-</p>
          <p>Services</p>
        </span>
        <div className="flex gap-2 font-bold text-4xl pl-15">
          <p className="text-persian font-light">Services</p>
          <p>I Provide</p>
        </div>
      </div>
      <div className="m-10 flex gap-3">
        <Card images={Laptop} head="UI/UX Design" />
        <Card images={Pen} head="Application Design" />
        <Card images={Web} head="Website Design" />
      </div>
    </div>
  );
};

export default Services;
