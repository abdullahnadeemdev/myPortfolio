import { useState } from "react";
import { NavLink } from "react-router-dom"; // Changed to 'react-router-dom' for standard web usage
import { LogoAN } from "../../../assets/images";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-main h-fit py-2 px-6 md:px-16 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <NavLink
          to="/"
          className="bg-periwinkle rounded-lg h-10 w-15 flex items-center justify-center p-1"
        >
          <img
            src={LogoAN}
            alt="Logo"
            className="object-contain scale-150 hover:scale-180 transition-transform duration-300"
          />
        </NavLink>

        {/* Desktop Menu (Hidden on screens smaller than md) */}
        <div className="hidden md:block">
          <ul className="text-periwinkle font-semibold flex flex-row gap-8 text-center justify-evenly">
            <li className="hover:text-pink transition-colors">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-pink transition-colors">
              <NavLink to="/aboutMe">About</NavLink>
            </li>
            <li className="hover:text-pink transition-colors">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon (Visible only on screens smaller than md) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-periwinkle hover:text-pink focus:outline-none"
          >
            {isOpen ? (
              // Close Icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon (Lines)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Conditionally rendered based on isOpen state */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-main shadow-lg border-t border-periwinkle/20">
          <ul className="text-periwinkle font-semibold flex flex-col items-center gap-6 py-8">
            <li
              className="hover:text-pink w-full text-center py-2"
              onClick={() => setIsOpen(false)}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className="hover:text-pink w-full text-center py-2"
              onClick={() => setIsOpen(false)}
            >
              <NavLink to="/aboutMe">About</NavLink>
            </li>
            <li
              className="hover:text-pink w-full text-center py-2"
              onClick={() => setIsOpen(false)}
            >
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
