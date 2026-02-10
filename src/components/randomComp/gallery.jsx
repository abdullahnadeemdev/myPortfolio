import { darazLogo } from "../../assets/images";

export function Profile() {
  return <img src={darazLogo} className="w-20 h-20" alt="Katherine Johnson" />;
}

export function Button() {
  return (
    <button
      className="bg-daraz text-blue-300 cursor-pointer
  "
    >
      B1
    </button>
  );
}

const Gallery = () => {
  const name = "Abdullah";
  return (
    <>
      <h1>Names </h1>
      <Profile />
      <Profile />
      <Profile />
    </>
  );
};

export default Gallery;
