import { myEmoji } from "../../../assets/images";
import ToggleButton from "../../shared/ToggleButton";

const Intro = () => {
  return (
    <div className="max-h-screen w-full font-serif">
      <div className="h-fit m-10  flex flex-row ">
        <div className=" flex-1 flex flex-col gap-5 pl-15 ">
          <div className="flex flex-col gap-10">
            <p className="px-4 border-2 border-dashed text-xs sm:text-sm lg:text-lg  py-2 bg-periwinkle w-fit">
              Hello There!
            </p>

            <div className="flex flex-col lg:gap-2 ">
              <span className="text-lg md:text-2xl lg:text-4xl font-semibold flex flex-row gap-2 mt-4">
                <p className="">I'm </p>
                <p className="text-persian underline">Abdullah Nadeem,</p>
              </span>
              <p className="text-lg md:text-2xl lg:text-4xl font-semibold">
                Web Designer
              </p>
              <p className="text-lg md:text-2xl lg:text-4xl font-semibold">
                Based in Pakistan
              </p>
            </div>
          </div>
          <p className="my-5 text-textLightGrey font-extralight text-xs lg:text-sm  text-wrap lg:mr-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur perspiciatis quidem repudiandae vero autem?
          </p>

          <ToggleButton txt={"View my Portfolio"}>
            <button className="border px-3 py-3 rounded-xl text-pink hover:cursor-pointer hover:bg-pink hover:text-main hover:duration-250">
              Hire Me
            </button>
          </ToggleButton>
        </div>

        <div className="h-right flex-1 flex justify-center items-start relative ">
          <img
            src={myEmoji}
            alt=""
            className=" mt-10 absolute z-1 top-2 right-22"
          />
          <div className="style1 bg-persian h-100 w-100 absolute -z-1 top-9 right-15 rounded-full"></div>
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
