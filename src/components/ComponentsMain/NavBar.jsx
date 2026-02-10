import { NavLink } from "react-router";
import Logo from "../../assets/images";

function NavBar() {
  return (
    <>
      <nav className="bg-[#002A32] h-fit py-2 px-16 ">
        <div className="flex items-center justify-around">
          <NavLink
            to="/"
            className="bg-[#A6B1E1] rounded-lg h-10 w-15 flex items-center "
          >
            <img
              src={Logo}
              alt="Logo"
              className=" object-contain scale-150  hover:scale-180"
            />
          </NavLink>

          <div></div>

          <div>
            <ul className=" text-[#A6B1E1] font-semibold flex flex-row gap-5 text-center justify-evenly ">
              <li className="hover:text-pink">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="hover:text-pink">
                <NavLink to="/aboutMe">About</NavLink>
              </li>

              <li className="hover:text-pink">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;

{
  /* <li>
  <select className="font-semibold text-[#A6B1E1] items-center justify-around">
    <option className="bg-[#502F4C] border-2 border-[#A6B1E1]">
      Projects
    </option>
    <option className="bg-[#502F4C] border-2 border-[#A6B1E1]">
      1st Component
    </option>
    <option className="bg-[#502F4C] border-2 border-[#A6B1E1]">
      2.Card
    </option>
    <option className="bg-[#502F4C] border-2 border-[#A6B1E1]">
      3.Props
    </option>
    <option className="bg-[#502F4C] border-2 border-[#A6B1E1]">
      4.UseState
    </option>
    <option className="bg-[#502F4C] border-2 border-[#A6B1E1]">
      5.Event Handling
    </option>
    <option className="bg-[#502F4C] border-2 border-[#A6B1E1]">
      6.To-Do List
    </option> */
}
{
  /* <li>7.Rendering</li>
        <li>8.UseEffect</li>
        <li>9.Fetch</li>
        <li>10.Axios</li> */
}
{
  /* <li></li> */
}
{
  /* </select> */
}
{
  /* </li> */
}
