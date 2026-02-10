import { myEmoji } from "../../assets/images";
import Tags from "./tags";

const AboutMe = () => {
  return (
    <div className="bg-main p-8 flex relative justify-center items-center h-screen -z-10">
      {/* <div className=" flex-1"> */}
      <div className=" flex-1 flex justify-center items-start  ">
        <img
          src={myEmoji}
          alt=""
          className=" mt-10 absolute z-1 top-30 left-40"
        />
        <div className="z-10 relative ">
          <span className="z-20 absolute right-10 top-40  w-fit h-fit">
            <Tags title="Prototype" clr="#002A32" clrBg="#1B998B" />
          </span>
          <span className="z-20 absolute -left-10 -rotate-22 top-35 w-fit h-fit">
            <Tags title="UI/UX Design" clrBg="#002A32" clr="#1B998B" />
          </span>
          <span className="z-20 absolute -left-30 top-31 w-fit h-fit">
            <Tags title="Responsive" clrBg="#002A32" clr="#1B998B" />
          </span>
          <span className="z-20 absolute right-30 rotate-38 top-29 w-fit h-fit">
            <Tags title="Animation" clrBg="#002A32" clr="#1B998B" />
          </span>
          <span className="z-20 absolute -right-20  top-22.5 w-fit h-fit">
            <Tags title="Landing Page" clr="#002A32" clrBg="#1B998B" />
          </span>
          <span className="z-20 absolute -left-48 rotate-14  top-21 w-fit h-fit">
            <Tags title="Functional" clr="#002A32" clrBg="#1B998B" />
          </span>
        </div>
        <div className=" bg-persian h-100 w-100 absolute -z-10 top-37 left-26 rounded-full"></div>
      </div>
      {/* </div> */}
      <div className="am-right flex-1  flex flex-col pt-10 items-start gap-5 text-white">
        <span className="flex gap-1 items-center">
          <p className="text-2xl font-bold text-persian">-</p>
          <p>About Me</p>
        </span>
        <span className="flex gap-2">
          <p className="text-4xl font-bold">Who is</p>
          <p className="text-4xl text-persian">Abdullah?</p>
        </span>
        <p className="font-extralight text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Rem facilis ab ex? ABdu voluptatum velit ducimus perferendis!
        </p>
        <div className="flex gap-4">
          <span>
            <p className="text-persian text-2xl font-bold">600+</p>
            <p>Project Completed</p>
          </span>
          <span>
            <p className="text-persian text-2xl font-bold">50+</p>
            <p>Industry Covered</p>
          </span>
          <span>
            <p className="text-persian text-2xl font-bold">2+</p>
            <p>Years of Experience</p>
          </span>
        </div>

        <button className="border-2 z-50 cursor-pointer border-persian px-3 py-3 rounded-xl text-persian hover:bg-persian hover:text-main transition-all duration-300 ">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
