import Card from "./card";
import { laptopImg } from "../../assets/images";
import { penToolImg } from "../../assets/images";
import { webDesignImg } from "../../assets/images";

const Services = () => {
  return (
    <div className="m-10 max-h-screen flex flex-col justify-center  font-serif">
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
        <Card images={laptopImg} head="UI/UX Design" />
        <Card images={penToolImg} head="Application Design" />
        <Card images={webDesignImg} head="Website Design" />
      </div>
    </div>
  );
};

export default Services;
