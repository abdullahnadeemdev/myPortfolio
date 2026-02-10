import ToolCard from "./toolCard";
import { HtmlImg } from "../../assets/images";
import { tailwindcssLogo } from "../../assets/images";
import { cssImg } from "../../assets/images";
import { JsImg } from "../../assets/images";
import { react } from "../../assets/images";

const Tools = () => {
  return (
    <div className="max-h-screen m-10 flex flex-col justify-center items-evenly">
      <div className="flex flex-col items-center gap-2">
        <span className="flex gap-1 items-center">
          <p className="text-2xl mb-1 text-persian">-</p>
          <p>My Favourite Tools</p>
        </span>
        <p className="text-4xl font-light text-persian">Exploring the Tools</p>
        <p className="font-bold text-4xl">Behind My Websites</p>
      </div>

      <div className="flex justify-evenly mt-10">
        <ToolCard logos={HtmlImg} percent="90%" title="HTML" />
        <ToolCard logos={cssImg} percent="10%" title="CSS" />
        <ToolCard
          logos={tailwindcssLogo}
          percent="90%"
          title="tailwindcssLogo"
        />
        <ToolCard logos={JsImg} percent="30%" title="JavaScript" />
        <ToolCard logos={react} percent="98%" title="React" />
      </div>
    </div>
  );
};

export default Tools;
