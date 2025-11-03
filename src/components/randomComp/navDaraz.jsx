import logo from "../assets/darazLogo.png";
function NavDaraz() {
  return (
    <>
      <nav>
        <div className="bg-daraz text-white">
          <ul className="flex justify-end gap-3 mr-3 text-sm ">
            <a href="_self">
              <li className="cursor-pointer">Login</li>
            </a>
            <a href="_self">
              <li className="cursor-pointer">SignUp</li>
            </a>
            <a href="_self">
              <li className="cursor-pointer">Sell on Daraz</li>
            </a>
            <a href="_self">
              <li className="cursor-pointer">Contact Us</li>
            </a>
          </ul>
        </div>
      </nav>

      <ali className="flex items-center justify-center gap-5 bg-daraz p-4">
        <a href="https://www.daraz.pk/?spm=a2a0e.tm80335142.header.dhome#?">
          <img src={logo} className="h-14 w-20" />
        </a>
        <span className="flex items-center ml-4">
          <input
            type="text"
            placeholder="Search in Daraz"
            className="bg-white px-2 w-150 h-10"
          />
          <button className="bg-orange-100 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="orange"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-search-icon lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      </ali>
    </>
  );
}

export default NavDaraz;
