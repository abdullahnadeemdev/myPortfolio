import NavBar from "./NavBar";
import SideBar from "./SideBar";

export function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="flex gap-2">
        <SideBar />
        <div>{children}</div>
      </div>
    </>
  );
}
