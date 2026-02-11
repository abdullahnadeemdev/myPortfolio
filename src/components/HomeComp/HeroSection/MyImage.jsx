import { myEmoji } from "../../../assets/images";

const MyImage = () => {
  return (
    <div className="bg-persian w-50 h-50 rounded-2xl md:w-70 md:h-70 lg:w-100 lg:h-100 md:rounded-full relative overflow-hidden">
      <img
        src={myEmoji}
        alt="my picture"
        className="object-scale-down w-full h-full ml-2"
      />
    </div>
  );
};

export default MyImage;
