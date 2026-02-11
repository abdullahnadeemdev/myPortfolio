import ToggleButton from "../../shared/ToggleButton";
import Button from "../../shared/Button";
import MyImage from "./MyImage";
import SeparationBar from "./SeparationBar";

const Intro = () => {
  return (
    <div className="h-[85vh] w-full font-serif  mt-5">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start gap-5 mx-2 md:ml-5">
          <div className="flex flex-col gap-5">
            <p className="px-4 border-2 border-dashed text-xs sm:text-base md:text-lg lg:text-xl py-2 bg-periwinkle w-fit hidden md:block">
              Hello There!
            </p>

            <div className="mt-2 lg:mt-4 flex flex-col items-center md:items-start md:flex-wrap">
              <span className="text-base sm:text-lg flex md:text-2xl lg:text-4xl font-semibold gap-2 max-w-[415px]">
                <p className="">I'm </p>
                <p className="text-persian underline">Abdullah Nadeem,</p>
              </span>
              <p className="text-base sm:text-lg md:text-2xl font-semibold md:w-full text-wrap text-center">
                Web Designer Based in Pakistan
              </p>
            </div>
          </div>
          <p className="my-5 md:my-10 text-textLightGrey font-extralight max-w-[380px] text-sm lg:text-base text-center md:text-start  md:max-w-[435px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur perspiciatis quidem repudiandae vero autem?
          </p>

          <div className="flex flex-col lg:flex-row items-center md:items-start gap-1 lg:gap-5 w-full md:mt-10">
            <ToggleButton txt={"View my Portfolio"} />
            <Button className="max-w-[280px]">Hire Me</Button>
          </div>
        </div>

        <div className="my-auto md:mr-5 ">
          <MyImage />
        </div>
      </div>

      <SeparationBar />
    </div>
  );
};

export default Intro;
