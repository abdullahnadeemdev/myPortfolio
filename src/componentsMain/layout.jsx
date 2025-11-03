import NavBar from "./navBar";
import SideBar from "./sideBar";

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
