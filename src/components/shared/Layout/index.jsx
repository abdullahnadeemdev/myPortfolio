import NavBar from "../Navbar";
import SideBar from "../Sidebar";

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
