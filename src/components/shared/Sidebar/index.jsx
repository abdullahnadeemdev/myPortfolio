import { NavLink } from "react-router";
import Card from "../../RandomComp/card";
import CondRendder from "../../randomComp/condRendder";
import Counter from "../../randomComp/counter";
import EventHandling from "../../randomComp/eventHandle";
import Form from "../../List2/form";
import Gallery from "../../randomComp/gallery";
import UseState from "../../randomComp/useState";

export const sideMenuList = [
  { name: "Card", url: "card", component: <Card /> },
  {
    name: "Conditional-Render",
    url: "conditional-render",
    component: <CondRendder />,
  },
  { name: "Counter", url: "counter", component: <Counter /> },
  {
    name: "Event-Handling",
    url: "event-handling",
    component: <EventHandling />,
  },
  { name: "Form", url: "form", component: <Form /> },
  { name: "Gallery", url: "gallery", component: <Gallery /> },
  { name: "Use-State", url: "use-state", component: <UseState /> },
];

const SideBar = () => {
  return (
    <>
      <div className="flex gap-2">
        <div className="bg-main w-fit  mt-0 border-t-2  border-periwinkle">
          <ul>
            {sideMenuList.map((menu, index) => (
              <NavLink
                className="text-periwinkle flex  px-3 py-2 font-semibold border-b-1
             border-periwinkle hover:cursor-pointer hover:bg-purp hover:text-persian"
                to={`/${menu.url}`}
                key={index}
              >
                {menu.name}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default SideBar;
