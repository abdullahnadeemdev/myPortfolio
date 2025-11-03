import ToolCard from "./toolCard";
import Html from "../../assets/Html.jpg";
import Tailwind from "../../assets/tailwindcss-logotype.svg";
import CSS from "../../assets/CSS.jpg";
import Js from "../../assets/JavaScript.jpg";
import React from "../../assets/React.png";

const Tools = () => {
  return (
    <div className="h-screen m-10 flex flex-col justify-center items-evenly">
      <div className="flex flex-col items-center gap-2">
        <span className="flex gap-1 items-center">
          <p className="text-2xl mb-1 text-persian">-</p>
          <p>My Favourite Tools</p>
        </span>
        <p className="text-4xl font-light text-persian">Exploring the Tools</p>
        <p className="font-bold text-4xl">Behind My Websites</p>
      </div>

      <div className="flex justify-evenly mt-10">
        <ToolCard logos={Html} percent="90%" title="HTML" />
        <ToolCard logos={CSS} percent="10%" title="CSS" />
        <ToolCard logos={Tailwind} percent="90%" title="Tailwind" />
        <ToolCard logos={Js} percent="30%" title="JavaScript" />
        <ToolCard logos={React} percent="98%" title="React" />
      </div>
    </div>
  );
};

export default Tools;
