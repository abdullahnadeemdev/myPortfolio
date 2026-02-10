import { myEmoji } from "../../../assets/images";

const MyImage = () => {
  return (
    <div className="bg-persian w-70 h-70 rounded-full relative overflow-hidden">
      <img
        src={myEmoji}
        alt="my picture"
        className="object-scale-down w-full h-full ml-2"
      />
    </div>
  );
};

export default MyImage;
