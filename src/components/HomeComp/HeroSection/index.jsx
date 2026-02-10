import ToggleButton from "../../shared/ToggleButton";
import Button from "../../shared/Button";
import MyImage from "./MyImage";

const Intro = () => {
  return (
    <div className="max-h-screen w-full font-serif ">
      <div className="h-full w-fit my-10 flex mx-auto bg-red-300">
        <div className="flex flex-col bg-blue-300 gap-5">
          <div className="flex flex-col gap-5">
            <p className="px-4 border-2 border-dashed text-xs sm:text-sm lg:text-base py-2 bg-periwinkle w-fit">
              Hello There!
            </p>

            <div className="mt-2 lg:mt-4 flex flex-wrap">
              <span className="text-lg flex md:text-2xl font-semibold gap-2 w-full max-w-[279px] ">
                <p className="">I'm </p>
                <p className="text-persian underline">Abdullah Nadeem,</p>
              </span>
              <p className="text-lg md:text-2xl font-semibold w-full ">
                Web Designer Based in Pakistan
              </p>
            </div>
          </div>
          <p className="lg:my-5 text-textLightGrey font-extralight text-xs lg:text-sm  text-wrap lg:mr-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur perspiciatis quidem repudiandae vero autem?
          </p>

          <div className="flex flex-col lg:flex-row gap-1 lg:gap-3  w-full">
            <ToggleButton txt={"View my Portfolio"} />
            <Button className="max-w-[244px]">Hire Me</Button>
          </div>
        </div>

        <div className="my-auto bg-green-300">
          <MyImage />
        </div>
      </div>

      <div className="separationBar my-25 relative">
        <div className="bg-main flex justify-evenly text-persian h-[4rem] items-center text-2xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="pink"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-asterisk-icon lucide-asterisk"
          >
            <path d="M12 6v12" />
            <path d="M17.196 9 6.804 15" />
            <path d="m6.804 9 10.392 6" />
          </svg>
          <span>Web Development</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="pink"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-asterisk-icon lucide-asterisk"
          >
            <path d="M12 6v12" />
            <path d="M17.196 9 6.804 15" />
            <path d="m6.804 9 10.392 6" />
          </svg>
          <span>UI/UX design</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="pink"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-asterisk-icon lucide-asterisk"
          >
            <path d="M12 6v12" />
            <path d="M17.196 9 6.804 15" />
            <path d="m6.804 9 10.392 6" />
          </svg>
          <span>AI integration</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="pink"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-asterisk-icon lucide-asterisk"
          >
            <path d="M12 6v12" />
            <path d="M17.196 9 6.804 15" />
            <path d="m6.804 9 10.392 6" />
          </svg>
        </div>
        <div className="h-[4rem] w-[99.98%] -rotate-2 bg-persian absolute top-0  -z-10"></div>
      </div>
    </div>
  );
};

export default Intro;
