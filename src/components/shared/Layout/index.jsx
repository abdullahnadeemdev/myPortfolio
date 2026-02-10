import { useState } from "react";
import NavBar from "../Navbar";
import SideBar from "../Sidebar";

export function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <NavBar />
      <div className="flex gap-2">
        {showSidebar && <SideBar />}
        <div className="w-full max-w-[1440px] mx-auto ">{children}</div>
      </div>
    </div>
  );
}
